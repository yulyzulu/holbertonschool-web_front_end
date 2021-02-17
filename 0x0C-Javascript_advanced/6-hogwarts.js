const studentHogwarts = function() {
    let privateScore = 0;
    let name = null;
    function changeScoreBy(points){
        privateScore = privateScore + points;
    }

    const setName = (newName) => {
        name = newName;
    };
    const rewardStudent = () => {
        changeScoreBy(1);
    };
    const penalizeStudent = () => {
        changeScoreBy(-1);
    };
    const getScore = () => {
        return name + " : " + privateScore;
    };
    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore
    }
}

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();