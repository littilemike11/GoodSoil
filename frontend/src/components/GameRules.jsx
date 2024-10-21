export default function GameRules(props) {
    return (
        <>
            <div tabIndex={0} className=" my-6 collapse collapse-plus border-base-300 bg-base-200 border">
                <div className="collapse-title text-xl font-medium">How to Play</div>
                <div className="collapse-content">
                    {props.content}
                </div>
            </div>
        </>
    )
}