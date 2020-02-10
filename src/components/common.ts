export interface IAttempt {
    id: number
    isCorrect: boolean
}

export interface IAttemptObj {
    [id: number]: boolean
}