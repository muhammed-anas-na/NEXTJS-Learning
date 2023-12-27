export default function Docs({params} : {params:{slug: string[]}}){
    console.log(params)
    if(params?.slug.length == 2){
        return (
            <h1>Viewing docks for feature {params.slug[0]} and concept {params.slug[1]}</h1>
        )
    }else if(params.slug?.length ==1){
        return <>Viewing docs for feature {params.slug[0]} </>
    }
    return <h1>Docs Home page</h1>
}