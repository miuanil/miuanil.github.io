$(function () {

    $("input[type='button']").on('click', function () {

        // Removes the all circle divs.
        $('.wrapper div.circle').remove();

        // Returns the value of inputs.
        let inputs = getInputValues();

        for (let i = 0; i < inputs.numberOfCirclesInput; i++) {

            // Creates a new circle.
            let newCircle = createNewCircle(inputs.width, getRandomPositionNumber(), getRandomColor());

            // Adds the new div into the wrapper class.
            $(".wrapper").append(newCircle);

            // Interval.
            let wideInterval = setInterval(changeWide, inputs.growRate, newCircle, inputs.growthAmount);

            // It adds/removes the opacity based mouse events.
            $(newCircle).hover(addOpacity, removeOpacity);

            // It removes the clicked circle.
            newCircle.on('click', removeCircle);

            // Checks the Wide Interval, if there is no Circle div in the wrapper, it stops the intervals.
            let checkCircleInterval = setInterval(function() {
                if ($('.wrapper div.circle').length === 0) {
                    clearInterval(wideInterval);
                    clearInterval(checkCircleInterval);
                }

            }, 1000);
        }
    });


    /**
     * It removes the clicked circle div.
     */
    function removeCircle() {
        $(this).remove();
    } 

    /**
     * 
     * Creates a new circle div.
     * @param number width 
     * @param number position 
     * @param string colorRGB 
     * @returns 
     */
    function createNewCircle(width, position, colorRGB) {
        return $("<div>").css({
            "width": `${width}px`,
            "height": `${width}px`,
            "left": `${position}%`,
            "background-color": `#${colorRGB}`,
            "border-color": `1px solid #${colorRGB}`,
        }).addClass("circle")
    }

    /**
     * Changes the width and height value of a selector.
     * @param {Selector} selector 
     * @param number growthAmount 
     */
    function changeWide(selector, growthAmount) {
        selector.css({
            "width": parseInt(selector.css("width")) + parseInt(growthAmount) + "px",
            "height": parseInt(selector.css("height")) + parseInt(growthAmount) + "px",
        });
    }

    /**
     * Adds the opacity class to the element.
     * @param {Event} event 
     * @param string className 
     */
    function addOpacity(event, className = 'half_opacity') {
        $(event.target).addClass(className);
    }

    /**
     * If the class name exists, it removes the class from the selector.
     * @param {Selector} event 
     * @param string className 
     */
    function removeOpacity(event, className = 'half_opacity') {
        if ($(event.target).hasClass(className)) {
            $(event.target).removeClass(className);
        }
    }

    /**
     * It returns a random number for the divs' position.
     * @returns {number}
     */
    function getRandomPositionNumber() {
        return Math.floor(Math.random() * 31) + 30;
    }

    /**
     * It returns the 6-digit string that stands for the RGB code.
     * @returns {string}
     */
    function getRandomColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }

    /**
     * It returns the all input values.
     * @returns {object}.
     */
    function getInputValues() {
        return {
            width: $("input[name='width']").val(), // Width Input.
            growthAmount: $("input[name='growth_amount']").val(), // Growth Amount Input.
            growRate: $("input[name='grow_rate']").val(), // Grow Rate Input.
            numberOfCirclesInput: $("input[name='number_of_circles']").val(), // Number of Circles Input.
        }
    }
});