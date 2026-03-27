export async function GET({params}){
    const {id} = await params;
    const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/products")
    
    const data = res.json();
    const result = await res
    return data.payload();
}