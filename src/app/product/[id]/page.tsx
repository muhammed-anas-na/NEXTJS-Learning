export default function productDetails({params} : {params: {id: string}}){
    console.log(params)
    return (
        <h1>Product Details page {params.id}</h1>
    )
}