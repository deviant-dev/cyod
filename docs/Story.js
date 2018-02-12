var Story = /** @class */ (function () {
    function Story() {
        this.lines = [
            "This is line 1.",
            "This is line 2."
        ];
        this.lineIndex = 0;
        this.currentChoices = [
            { text: "Choice A", index: 0 },
            { text: "Choice B", index: 1 },
            { text: "Choice C", index: 2 }
        ];
    }
    Object.defineProperty(Story.prototype, "canContinue", {
        get: function () {
            return false;
            // this.lineIndex < this.lines.length;
        },
        enumerable: true,
        configurable: true
    });
    Story.prototype.ChooseChoiceIndex = function (index) {
    };
    return Story;
}());
//# sourceMappingURL=Story.js.map