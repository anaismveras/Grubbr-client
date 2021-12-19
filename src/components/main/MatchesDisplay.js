import '../css/MatchesDisplay.css'
import { useEffect } from "react"
import '../css/MatchesDisplay.css'

const MatchesDisplay = props => {
    // useEffect(() => {
        
    // }, [])

    let pendingMatchesArray = []
    let matchesArray = []

    if (!props.matches && !props.pendingMatches) {

        pendingMatchesArray = props.pendingMatches.map(match => {
            return <p>{match.firstName}</p>
        })

        matchesArray = props.matches.map(match => {
            return <p>{match.firstName}</p>
        })
    }

    return (

        <div className='matchesDiv'>
            <div class='matchDesignDiv'>
            <div>
            <h2>Pending Matches</h2>
                {/* {props.pendingMatches ? {pendingMatchesArray} : <p>'No pending matches'</p> } */}
            </div>
            <div>
            <h2>Your Matches</h2>

                {/* {props.matches ? {matchesArray} : <p>No matches, you bum!</p> } */}
            </div>
            </div>
        </div>
    )
}

export default MatchesDisplay