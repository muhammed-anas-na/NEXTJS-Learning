import { notFound } from "next/navigation"

export default function Review({params} : {params:{reviewId: string , id: string}}){
    if(parseInt(params.reviewId) > 1000){
        notFound()
    }
    return (
        <>
            <h1>Review Id : {params.reviewId}</h1>
            <h1>Product ID : {params.id}</h1>
        </>
    )
}