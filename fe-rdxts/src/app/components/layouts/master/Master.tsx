import { ReactNode } from "react"


type TProps = {
    children: ReactNode
} & { [key:string]: any }

const Master = (props: TProps) => {
    const { children, ...rest } = props
    return (
        <div>
            Master
            { children }
        </div>
    )
}

export default Master