export type TQABlock = {
    id: string,
    type: string,
    question: string,
    options: Array<string>
    ans: string 
}
export type TQPaperIntro = {
    name: string,
    cat: string,
    subcat: string,
    desc: string
}
export type TQPaperBody = {
    [qaBockID: string]: TQABlock
}
export type TQPaperFinish = {
    duration: number
}
export type TQPaper = {
    id: string
    intro: TQPaperIntro
    body: TQPaperBody
    finish: TQPaperFinish
}