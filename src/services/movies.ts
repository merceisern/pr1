
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export interface Movie {
  id: string
  title: string
  year: number
  genre: string
  posterUrl: string
}

export async function getMovies(): Promise<Movie[]> {
  const snapshot = await getDocs(collection(db, 'movies'))

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Movie[]
}
