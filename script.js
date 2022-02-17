

let app = new Vue({
    el: '.form-app',
    data: {
        text: '',
        showedText: '',
    },
    methods: {

        displayText: function () {
            this.showedText = this.text;
            this.text = '';
        }
    },
});



let btn = new Vue({
    el: '.buttons',
    data: {
        whichMouseButton: '',
        result: '',
        time: '',
    },
    methods: {
        showMouseBtn: function () {
            let elem = document.querySelector('.first-btn');

            elem.addEventListener('mouseup', function (e) {
                if(e.which == 0) {
                    this.whichMouseButton = 'Left';
                } else if(e.which == 2) {
                    this.whichMouseButton = 'Right';
                } else if(e.which == 1) {
                    this.whichMouseButton = 'Middle';
                    // пыталась также сделать через e.button, не помогло((
                }
            })
        },
        showResult: function () {
            this.result = this.whichMouseButton;
        },
        calcTime: function () {
            let now = new Date();
            this.time = now;
        },

    }
});

