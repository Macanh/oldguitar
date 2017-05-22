var chords = [
	{
		chord: ['x', 'x', 0, 2, 3, 1],
		fingering: ['x', 'x', 0, 2, 3, 1],
		name: 'D',
		type: 'm',
	},
	{
		chord: [0, 2, 2, 0, 0, 0],
		fingering: [0, 1, 2, 0, 0, 0],
		name: 'E',
		type: 'min',
	},
	{
        chord: ['x', 0, 2, 0, 2, 0],
        fingering: ['x', 0, 1, 0, 2, 0],
        name: 'A',
        type: '7',
    },
	{
        chord: ['x', 3, 2, 0, 1, 0],
        fingering: ['x', 3, 2, 0, 1, 0],
        name: 'C',
        type: 'maj',
    },
    {
        chord: ['x', 'x', 0, 2, 3, 2],
        fingering: ['x', 'x', 0, 1, 3, 2],
        name: 'D',
        type: 'maj',
    },
    {
        chord: [3, 2, 0, 0, 3, 3],
        fingering: [2, 1, 0, 0, 3, 4],
        name: 'G',
        type: 'maj',
    },
];
function buildChord(){
	var selectedChord = document.getElementById('chord-select').value;
	// reset all the notes before a new chord is built
	var allNotes = document.getElementsByClassName('note');
	for(i=0; i<allNotes.length; i++){
		allNotes[i].innerHTML = '';
	}
	for(c=0; c<chords.length; c++){
		var searchChord = selectedChord.search(chords[c].name + chords[c].type);
		if(searchChord != -1){
			document.getElementById('chord-name').innerHTML = chords[c].name + chords[c].type;
			for(s=0; s<6; s++){
				switch(chords[c].chord[s]){
					case 0: 
						var fret = 0;
					break;
					case 1: 
						var fret = 1;
					break;
					case 2: 
						var fret = 2;
					break;
					case 3: 
						var fret = 3;
					break;
					case 4: 
						var fret = 4;
					break;
					case 5: 
						var fret = 5;
					break;
					case 'x':
		                var fret = 'x'
		            break;
				}
				if (fret == 'x'){
					var placement = 's' + s + '-f' + '0';
					document.getElementById(placement).innerHTML = '<span class="chord-note">x</span>';
				} else{
					var placement = 's' + s + '-f' + fret;
					document.getElementById(placement).innerHTML = '<span class="chord-note">' + chords[c].fingering[s] + '</span>'; 
				}
			}
		}
	}
}
buildChord();
document.getElementById('chord-button').addEventListener('click', buildChord);
