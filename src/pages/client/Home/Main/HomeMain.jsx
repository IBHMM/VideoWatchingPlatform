import { Categories } from "../../../../components/client/Category/Categories";
import EditorPick from "../../../../components/client/EditorPick/EditorPick";
import { Features } from "../../../../components/client/Features/Features";
import { Header } from "../../../../components/client/Header/Header";
import { MegaSales } from "../../../../components/client/MegaSales/MegaSales";
import { NewRelease } from "../../../../components/client/NewRelease/NewRelease";
import { Populargames } from "../../../../components/client/PopularGames/Populargames";
import Questions from "../../../../components/client/Questions/Questions";
import { Subscription } from "../../../../components/client/Subscription/Subscription";
import { Succession } from "../../../../components/client/Successtion/Successtion";
import { TrendingMovies } from "../../../../components/client/Trending/TrendingMovies";
import { Trial } from "../../../../components/client/Trial/Trial";

export function HomeMain() {

    return (
        <>
            <Header />
            <TrendingMovies />
            <Succession />
            <EditorPick />
            <Categories />
            <NewRelease />
            <MegaSales />
            <Populargames />
            <Features />
            <Subscription />
            <Trial />
            <Questions />
        </>
    )
} 