import GameCard from "../components/GameCard"
export default function LandingPage() {
    return (
        <>
            <div className="flex">
                <GameCard
                    Title="Same Brain"
                    Description=" How in Sync are you and your partner?"
                />
                <GameCard
                    Title="Band Wagon"
                    Description="Basic is the goal"
                />
                <GameCard
                    Title="Odds One Out"
                    Description="Black sheep = best sheep"
                />
            </div>

        </>
    )
}