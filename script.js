// Draft data
const draftData = {
    round1: [
        {
            pick: 1,
            team: "Winston's Warriors",
            player: "Ashton Jeanty - RB",
            description: "The consensus No. 1 pick. Jeanty’s explosive burst and elite contact balance let him absorb hits at the catch point and drive through defenders."
        },
        {
            pick: 2,
            team: "Arlington Lads",
            player: "Travis Hunter - WR",
            description: "The Lads trade up for generational talent. After seeing him fall in recent mocks, GM S. Villegas is quick to scoop up the 'Shohei Ohtani of football'."
        },
        {
            pick: 3,
            team: "DoosBoys",
            player: "Omarion Hampton - RB",
            description: "Hampton is a powerful, three-down back with dependable hands and the vision to consistently hit creases. At 1.03, he perfectly addresses the DoosBoys’ need for a RB1."
        },
        {
            pick: 4,
            team: "Dropkick Murphys",
            player: "Tetairoa Mcmillan - WR",
            description: "Instead of going after their hometown boy, the Murphys go out and get a physical specimen at WR."
        },
        {
            pick: 5,
            team: "Lil Peanut's Padres",
            player: "Matthew Golden",
            description: "'Bet' - Padres GM after the Murphy's decide to pass on Golden."
        },
        {
            pick: 6,
            team: "Watauga Whonsters",
            player: "Treveyon Henderson - RB",
            description: "A dynamic playmaker with home-run hitting ability. Henderson adds another explosive young weapon to the Whonsters' offense."
        },
        {
            pick: 7,
            team: "Memphis Jets",
            player: "Cameron Ward - QB",
            description: "The Jets QB room lacks a star. Carried by position players in last years championship run, the Jets take a shot on their QB of the future."
        },
        {
            pick: 8,
            team: "Arlington Ladds",
            player: "Emeka Egbuka - WR",
            description: "Landing spot is the only question here for Egbuka. With an already stacked WR room, the Lads get to wait for Egbuka to blossom into a true WR1 as the Bucs WRs age."
        },
        {
            pick: 9,
            team: "Arlington Lads",
            player: "Colston Loveland - TE",
            description: "The number 10 pick in the NFL draft, Ben Johnson sees something in Loveland, and it looks like the Lads see it too."
        },
        {
            pick: 10,
            team: "Highland Hawgs",
            player: "Quinshon Judkins - RB",
            description: "Quinshon Judkins was a problem every year in college and will continue to be in the NFL. The Hawgs go out and get their RB1 at pick 10."
        },
        {
            pick: 11,
            team: "Winston's Warriors",
            player: "RJ Harvey - RB",
            description: "RJ Harvey is a project back, but man if he works out in that Sean Payton system, he could become a fantasy star quickly."
        },
        {
            pick: 12,
            team: "The Dukes",
            player: "Tyler Warren - TE",
            description: "With Mark Andrews aging, The Dukes trade up and get their TE of the future."
        }
    ],
    round2: [
        {
            pick: 13,
            team: "Winston's Warriors",
            player: "Luther Burden - WR",
            description: "Luther has an uphill battle to climb with all the mouths to feed in Chicago, but he has the talent to be a star if handled right."
        },
        {
            pick: 14,
            team: "Memphis Jets",
            player: "Kaleb Johnson - RB",
            description: "A hard running 3 down back. Johnson fits perfectly into Tomlin and Smith's ground attack in Pittsburgh and the Jets snag a great talent."
        },
        {
            pick: 15,
            team: "Highland Hawgs",
            player: "Jaxson Dart - QB",
            description: "Who knows how Jaxson Dart will turn out in the league? The Hawgs get good value and take a shot on him here in the 2nd. Will he boom or bust? Time will tell."
        },
        {
            pick: 16,
            team: "Kilpatty Vegas",
            player: "Tre Harris - WR",
            description: "Dominant big play threat going into a great system. A boom or bust pick, but Tre Harris could be a sleeper WR1 for the Chargers."
        },
        {
            pick: 17,
            team: "Lil Peanut's Padres",
            player: "Jayden Higgins - WR",
            description: "A huge target with great hands. The Padres get a great WR who should see the field in a crippled Houston WR room."
        },
        {
            pick: 18,
            team: "Winston's Warriors",
            player: "Cam Skattebo - RB",
            description: "A bruising, fan-favorite in college. Skattebo should see snaps early in a short-staffed NY backfield."
        },
        {
            pick: 19,
            team: "Winston's Warriors",
            player: "Kyle Williams - WR",
            description: "A shifty receiver with good hands and route running. Williams is going into a Patriots offense with not many weapons. The Warriors get a stud late."
        },
        {
            pick: 20,
            team: "The Dukes",
            player: "Jack Bech - WR",
            description: "This pick just screams Dukes. Bech is a high motor, smart, sneaky athletic WR who just plays the game the right way."
        },
        {
            pick: 21,
            team: "Rocky Top Rowdies",
            player: "Brayshul Tuten - RB",
            description: "Tuten turned heads at the combine, and with a new coaching stuff and disappointing RB room. Tuten could steal reps early."
        },
        {
            pick: 22,
            team: "Expiring Goods",
            player: "Jaylin Noel - WR",
            description: "A shifty, deep threat receiver with good hands and route running. Noel is going into a crippled Texans WR room and could explode."
        },
        {
            pick: 23,
            team: "Lil Peanut's Padres",
            player: "Shedeur Sanders - QB",
            description: "After losing their team mascot (Deshaun Watson), the Padres reup on a player who could turn into a score if he gets Perfect Timing Taha.",
        },
        {
            pick: 24,
            team: "Memphis Jets",
            player: "Terrance Ferguson - TE",
            description: "Sean Mcvay used a lot of draft captial and reportedly loves Ferguson. The Jets reup at TE after losing Kittle."
        }
    ]
};

// DOM Elements
const round1Picks = document.getElementById('round1-picks');
const round2Picks = document.getElementById('round2-picks');
const mobileDescription = document.getElementById('mobile-description');
const closeButton = document.querySelector('.close-button');

// Function to get player image URL from Sleeper
async function getPlayerImage(playerName) {
    try {
        // Remove position from player name for search
        const searchName = playerName.split(' - ')[0];
        console.log('Searching for player:', searchName);
        
        // Sleeper API endpoint for player search
        const response = await fetch(`https://api.sleeper.app/v1/players/nfl`);
        const players = await response.json();
        
        // Find player by name (case insensitive)
        const player = Object.values(players).find(p => 
            p.search_full_name?.toLowerCase() === searchName.toLowerCase() ||
            p.search_first_name?.toLowerCase() + ' ' + p.search_last_name?.toLowerCase() === searchName.toLowerCase()
        );
        
        if (player && player.search_rank) {
            // If player is found and has a rank, return their photo
            return `https://sleepercdn.com/content/nfl/players/thumb/${player.player_id}.jpg`;
        }
        
        // Fallback to UI Avatars if player not found
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(searchName)}&background=random`;
    } catch (error) {
        console.error('Error fetching player image:', error);
        return 'https://via.placeholder.com/60?text=No+Photo';
    }
}

// Create pick elements
async function createPickElement(pick) {
    try {
        const pickElement = document.createElement('div');
        pickElement.className = 'draft-card';
        
        const imageUrl = await getPlayerImage(pick.player);
        const [playerName, position] = pick.player.split(' - ');
        
        pickElement.innerHTML = `
            <div class="card-content">
                <div class="flex items-center space-x-4">
                    <img src="${imageUrl}" alt="${playerName}" class="w-16 h-16 rounded-full border-2 border-espn-red object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(playerName)}&background=random'">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="pick-number">${pick.pick}</span>
                            <span class="team-name">${pick.team}</span>
                        </div>
                        <h3 class="player-name">${playerName}</h3>
                        <p class="player-position">${position}</p>
                    </div>
                </div>
            </div>
            <div class="card-description">
                <div class="text-center max-w-sm">
                    <h4 class="description-text text-lg font-semibold mb-2">${playerName}</h4>
                    <p class="description-subtext">${pick.description}</p>
                </div>
            </div>
        `;

        // Mobile click functionality
        pickElement.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const title = document.getElementById('pick-title');
                const description = document.getElementById('pick-description');
                
                // Clear any existing image
                const existingImage = description.parentElement.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }
                
                const modalImage = document.createElement('img');
                modalImage.src = imageUrl;
                modalImage.alt = playerName;
                modalImage.className = 'w-24 h-24 rounded-full border-2 border-espn-red mx-auto mb-4 object-cover';
                modalImage.onerror = function() {
                    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(playerName)}&background=random`;
                };
                
                title.textContent = playerName;
                description.textContent = pick.description;
                description.parentElement.insertBefore(modalImage, title);
                mobileDescription.classList.remove('hidden');
            }
        });

        return pickElement;
    } catch (error) {
        console.error('Error creating pick element:', error);
        const errorElement = document.createElement('div');
        errorElement.className = 'draft-card';
        errorElement.innerHTML = `
            <div class="card-content">
                <div class="flex items-center space-x-4">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="pick-number">${pick.pick}</span>
                            <span class="team-name">${pick.team}</span>
                        </div>
                        <h3 class="player-name">${pick.player}</h3>
                    </div>
                </div>
            </div>
        `;
        return errorElement;
    }
}

// Initialize draft picks
async function initializeDraft() {
    try {
        console.log('Initializing draft...');
        
        // Clear existing picks
        round1Picks.innerHTML = '';
        round2Picks.innerHTML = '';
        
        console.log('Loading Round 1 picks...');
        for (const pick of draftData.round1) {
            const pickElement = await createPickElement(pick);
            round1Picks.appendChild(pickElement);
        }
        
        console.log('Loading Round 2 picks...');
        for (const pick of draftData.round2) {
            const pickElement = await createPickElement(pick);
            round2Picks.appendChild(pickElement);
        }
        
        console.log('Draft initialization complete!');
    } catch (error) {
        console.error('Error initializing draft:', error);
    }
}

// Close mobile description
document.querySelector('#mobile-description button').addEventListener('click', () => {
    mobileDescription.classList.add('hidden');
});

// Close mobile description when clicking outside
mobileDescription.addEventListener('click', (e) => {
    if (e.target === mobileDescription) {
        mobileDescription.classList.add('hidden');
    }
});

// Initialize the draft when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing draft...');
    initializeDraft();
}); 