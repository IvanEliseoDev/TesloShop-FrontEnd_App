
import {create} from 'zustand'

//Ejemplo  de como se utiliza Zustand con typeScript

//1. Definimos la "forma" de nuestro contexto
type Store = {
  count: number
  inc: () => void
  dec: () => void
}

// 2. 'create' es la función que construye el contexto.
// Es como decir: "Hey Zustand, prepárame un espacio para estos datos"

{/*Es una función que recibe un "callback". Al ejecutarla,
    te devuelve un Hook personalizado (en tu caso, useStore).
    Lo genial es que puedes usar ese hook en cualquier componente sin configurar
    "Providers" que envuelvan toda tu aplicación.*/}
export const useStore = create<Store>()((set /* SET Es la herramienta para cambiar el estado.*/) => ({
    // Este es el ESTADO inicial (como el useState)
  count: 100,

  // 'set' es una función interna de Zustand que sirve para ACTUALIZAR la bodega.
  // Es el equivalente al "dispatch" en Redux o al "setState".
  inc: () => set((state /*Toma el estado actual (state)*/) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))