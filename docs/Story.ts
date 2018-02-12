class Story {
    private lineIndex: number;
    currentChoices: { text: string; index: number; }[];
    lines: string[];

    get canContinue() {
        return this.lineIndex < this.lines.length;
    }

    Continue() {
        return this.lines[this.lineIndex++];
    }

    ChooseChoiceIndex(index) {
 
    }  

    constructor() {
        this.lines = [
            "This is line 1.",
            "This is line 2."
        ]

        this.lineIndex = 0;

        this.currentChoices = [
            { text: "Choice A", index: 0 },
            { text: "Choice B", index: 1 },
            { text: "Choice C", index: 2 }
        ]
    }
}