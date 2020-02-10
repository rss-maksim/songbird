import React from 'react';
import cn from 'classnames';
import shuffle from 'shuffle-array';

import { IStep, ITrack } from '../../models'
import { AnswerCard, AnswerOptions, Button, Question, Header } from '../';
import { IAttempt } from '../common';

import './index.scss'

interface IProps {
    options: ITrack[]
    steps: IStep[]
}

interface IState {
    step: number
    score: number
    chosenOption: ITrack
    attempts: IAttempt
    answer?: ITrack
    answerOptions?: ITrack[]
}

export class Quiz extends React.Component<IProps, IState> {
    state = {
        step: 0,
        score: 0,
        chosenOption: null,
        attempts: {},
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

    onHandleSelect = (question: ITrack) => () => {
        const { steps } = this.props;
        const { step } = this.state;
        const isCorrect = steps[step].answerId === question.id;
        this.setState(({ attempts }: IState) => ({
            chosenOption: question,
            attempts: { ...attempts, [question.id]: isCorrect } }));
    };

    onHandleNext = () => {
        const isSolved: boolean = this.isSolved();
        if (isSolved) {
            this.setState(({ step }: IState) => ({
                chosenOption: null,
                attempts: {},
                step: step + 1
            }));
        }
    };

    isSolved = (): boolean => Object.values(this.state.attempts).some((isCorrect) => Boolean(isCorrect));

    render() {
        const { attempts, score, step, chosenOption, answerOptions } = this.state;
        const { options, steps } = this.props;
        if (step === steps.length - 1) {
            return <div>The end</div>
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
                  <AnswerOptions answers={answerOptions} attempts={attempts} onSelect={this.onHandleSelect}/>
                  <AnswerCard answer={chosenOption} solved={canGoNext} />
              </div>
              <Button className={cn('', {'next-button': canGoNext})} onClick={this.onHandleNext}>Next Level</Button>
            </>
        )
    }
}