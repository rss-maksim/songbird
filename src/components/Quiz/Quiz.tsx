import React from 'react';
import cn from 'classnames';
import shuffle from 'shuffle-array';
import { last } from 'ramda';

import { IStep, ITrack } from '../../models'
import { AnswerCard, AnswerOptions, Button, Congrats, Question, Header } from '../';
import { IAttempt, IAttemptObj } from '../common';

import './index.scss'

interface IProps {
    options: ITrack[]
    steps: IStep[]
}

interface IState {
    step: number
    score: number
    chosenOption: ITrack
    attempts: IAttempt[]
    answer?: ITrack
    answerOptions?: ITrack[]
}

const MAX_ATTEMPTS = 6;
const MAX_SCORE = 5 * 6;

const defaultState = {
    step: 0,
    score: 0,
    chosenOption: null,
    attempts: [],
};

export class Quiz extends React.Component<IProps, IState> {
    state = {
        ...defaultState,
        answerOptions: []
    };

    componentDidMount(): void {
        const answerOptions = shuffle(this.props.options);
        this.setState({ answerOptions });
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): void {
        console.log(this.state.attempts);
        console.log(prevState.attempts);
    }

    updateScore = () => {
        const lastAttempt: IAttempt = last(this.state.attempts);
        if (lastAttempt.isCorrect) {
            this.setState(({ attempts, score }: IState) => ({
                score: score + (MAX_ATTEMPTS - attempts.length)
            }));
        }
    };

    onHandleSelect = (question: ITrack) => () => {
        const { steps } = this.props;
        const { attempts, step } = this.state;
        const isCorrect = steps[step].answerId === question.id;
        if (attempts.length >= MAX_ATTEMPTS) {
            return;
        }

        const shouldBeAdded: boolean = !attempts.some(({ id }: IAttempt) => question.id === id);
        const updatedAttempts = shouldBeAdded ? [ ...attempts, { id: question.id, isCorrect }] : attempts;
        this.setState(() => ({
            chosenOption: question,
            attempts: updatedAttempts,
        }), this.updateScore);
    };

    onHandleNext = () => {
        const isSolved: boolean = this.isSolved();
        if (isSolved) {
            this.setState(({ step }: IState) => ({
                chosenOption: null,
                attempts: [],
                step: step + 1
            }));
        }
    };

    onRepeatHandle = () => this.setState({ ...defaultState });

    isSolved = (): boolean => this.state.attempts.some(({ isCorrect }) => isCorrect);

    transformAttempts = (attempts: IAttempt[]): IAttemptObj => attempts.reduce((acc, attempt) => ({ ...acc, [attempt.id]: attempt.isCorrect }), {})

    render() {
        const { attempts, score, step, chosenOption, answerOptions } = this.state;
        const { options, steps } = this.props;
        if (step > steps.length - 1) {
            return [
                    <Header score={score} currentStep={step} steps={steps} />,
                    <Congrats score={score} maxScore={MAX_SCORE} onRepeat={this.onRepeatHandle} />
             ];
        }
        const stepObj: IStep = steps[step];
        if (!stepObj) {
            throw new Error('There is no such step...')
        }
        const question = options.find(({ id }: ITrack): boolean => id === stepObj.answerId);

        if (!question) {
            throw new Error('There is no such question...')
        }

        const canGoNext: boolean = this.isSolved();

        console.log('chosenOption', { chosenOption, attempts });

        return (
            <>
              <Header score={score} currentStep={step} steps={steps} />
              <Question question={question} solved={canGoNext} />
              <div className="answers-container">
                  <AnswerOptions answers={answerOptions} attempts={this.transformAttempts(attempts)} onSelect={this.onHandleSelect}/>
                  <AnswerCard answer={chosenOption} solved={canGoNext} />
              </div>
              <Button className={cn('', {'next-button': canGoNext})} onClick={this.onHandleNext}>Next Level</Button>
            </>
        )
    }
}