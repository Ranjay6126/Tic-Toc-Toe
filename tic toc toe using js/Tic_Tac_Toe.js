let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");

let NewGame = document.querySelector("#New-Game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // PlayerX , PlayerO

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turnO) {
      // PlayerO
      box.innerText = "O";
      turnO = false;
    } else {
      // PlayerX
      box.innerText = "X";
      turnO = true;
    }
    box.setAttribute("disabled", true);

    checkWinner();
  });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
}
}

const showWinner = (Winner) => {
  msg.innerText = `Player ${Winner} wins!`;
  msgContainer.classList.remove("hide");

  disabledBoxes() ;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);

    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

// Reset button functionality
reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.removeAttribute("disabled");
  });
  turnO = true;
  msgContainer.classList.add("hide");
  msg.innerText = "";
});

// New Game button functionality
NewGame.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.removeAttribute("disabled");
  });
  turnO = true;
  msgContainer.classList.add("hide");
  msg.innerText = "";
});
