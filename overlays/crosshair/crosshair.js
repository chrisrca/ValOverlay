import {tasklist} from 'tasklist';

// Checks if valorant is currently running
function runningValorant() {
    let task
    while ((typeof task === 'undefined')) {
        task = (await tasklist());
    }

    for (let currenttask = 0; currenttask < task.length; currenttask++) {
        if (task[currenttask].imageName.includes("VALORANT")) {
            return true
        }
    }
    return false
}