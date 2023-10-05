import mockData from "../mocks/data"

const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=3762930b913b46e2a8d5de5d687bfcd0'

export default async function useFetch(hardcodeado: Boolean, id: number): Promise<any> {
    var result = null
    if (hardcodeado) result = mockData  
    try {
        const response = await fetch(API)
        if (!response.ok) throw new Error('Error en la llamada a la API')
        result = await response.json() as Promise<APIResponse>
    } catch (error) {
        console.error(error)
    }
    if (id) return result.results.find((plato: Result) => plato.id === id)
    return result.results as Promise<Result[]>
}

export interface APIResponse {
    results:      Result[];
    offset:       number;
    number:       number;
    totalResults: number;
}

export interface Result {
    id:        number;
    title:     string;
    image:     string;
    imageType: ImageType;
}

export enum ImageType {
    Jpg = "jpg",
}
