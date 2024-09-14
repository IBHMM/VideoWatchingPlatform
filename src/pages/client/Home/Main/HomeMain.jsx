import { Categories } from "../../../../components/client/Category/Categories";
import EditorPick from "../../../../components/client/EditorPick/EditorPick";
import { Header } from "../../../../components/client/Header/Header";
import { NewRelease } from "../../../../components/client/NewRelease/NewRelease";
import { Succession } from "../../../../components/client/Successtion/Successtion";
import { TrendingMovies } from "../../../../components/client/Trending/TrendingMovies";

export function HomeMain() {

    return (
        <>
            <Header />
            <TrendingMovies />
            <Succession />
            <EditorPick />
            <Categories />
            <NewRelease />
        </>
    )
} 