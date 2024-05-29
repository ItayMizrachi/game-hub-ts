import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//using stored data because it barely changes to optimize the client expirience
const useGenres = () => ({ data: genres, isLoading: false, error: null });

// calling server for data
// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
