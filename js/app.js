class App {
    constructor(){
        console.log('start app...');
        this.DOM = {el:document.querySelector('body')};
        this.DOM.app = this.DOM.el.querySelectorAll('.app');
        this.DOM.box01 = this.DOM.el.querySelectorAll('.box01');
        this.DOM.box02 = this.DOM.el.querySelectorAll('.box02');
        this.DOM.box03 = this.DOM.el.querySelectorAll('.box03');
        this.DOM.next = this.DOM.el.querySelectorAll('.next');
        this.DOM.prev = this.DOM.el.querySelectorAll('.prev');
        this.DOM.content = this.DOM.el.querySelector('.content');
        // Some config values.
        this.config = {
            animation: {
                // Speed and ease for the animation.
                speed: {fast: 0.3, medium: 0.5, slow: 0.7},
                ease: {power01: 'Power2.easeInOut', quint01: 'Quint.easeOut'}
            }
        };

        //start animations
        this.startStage();
    }


    startStage(){
        var tl1 = new TimelineMax({repeat:0});
        var tl2 = new TimelineMax({repeat:0});
        var tl3 = new TimelineMax({repeat:0});
        var tlcontrols = new TimelineMax({repeat:0});
        var tlset = new TimelineMax({repeat:0});
        const content = this.DOM.content;
        const contentTitle = this.DOM.content.querySelectorAll('.content__title');
        const contentSubtitle = this.DOM.content.querySelectorAll('.content__subtitle');
        const contentPara = this.DOM.content.querySelectorAll('.content__para');

            tlset.set(contentTitle, {
                top:'-10px',
                autoAlpha: 0,
            })
            .set(contentSubtitle, {
                top:'-10px',
                autoAlpha: 0,
            })
            .set(contentPara, {
                top:'-10px',
                autoAlpha: 0,
            });

            tl1.set(this.DOM.box01,{
                top: '50%',
                left: '-50%',
                scale: 1,
                autoAlpha: 1,
                zIndex:100,
            }).to(this.DOM.box01 , this.config.animation.speed.slow, {
                ease: this.config.animation.ease.power01,
                top: '50%',
                left: '20%',
                scale: 1,
                zIndex:100,
            });

            tl2.set(this.DOM.box02,{
                top: '50%',
                left: '-50%',
                scale: 1,
                autoAlpha: 1,
                zIndex:100,
            }).to(this.DOM.box02 , this.config.animation.speed.slow, {
                ease: this.config.animation.ease.power01,
                delay: .1,
                top: '50%',
                left: '50%',
                scale: 1,
                zIndex:100,
            });

            tl3.set(this.DOM.box03,{
                top: '50%',
                left: '-50%',
                scale: 1,
                autoAlpha: 1,
                zIndex:100,
            }).to(this.DOM.box03 , this.config.animation.speed.slow, {
                ease: this.config.animation.ease.power01,
                delay: .2,
                top: '50%',
                left: '80%',
                scale: 1,
                zIndex:100,
            });

            // tlcontrols.set(this.DOM.prev,{
            //     top: '50%',
            //     left: '-10em',
            //     zIndex:200,
            //     autoAlpha: 1,
            // }).set(this.DOM.next,{
            //     top: '50%',
            //     right: '-10em',
            //     zIndex:200,
            //     autoAlpha: 1,
            // })
            // .to(this.DOM.prev , this.config.animation.speed.slow, {
            //     ease: this.config.animation.ease.power01,
            //     top: '50%',
            //     left: '1em',
            //     zIndex:100,
            // },1)
            // .to(this.DOM.next , this.config.animation.speed.slow, {
            //     ease: this.config.animation.ease.power01,
            //     top: '50%',
            //     right: '1em',
            //     zIndex:100,
            // },1);
        
    }


    openBox(){
        let e = this.getCurrent();
        var tl1 = new TimelineMax({repeat:0});
        const bg = e.querySelectorAll('.bg');
        const title = e.querySelectorAll('.title');
        const content = this.DOM.content;
        const contentTitle = this.DOM.content.querySelectorAll('.content__title');
        const contentSubtitle = this.DOM.content.querySelectorAll('.content__subtitle');
        const contentPara = this.DOM.content.querySelectorAll('.content__para');
        tl1.set(e, {
            zIndex:300,
        })
        .to(bg, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top: '50%',
            right: '50%',
            scale: 8,
        },0)
        .to(title, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top: '20em',
            autoAlpha: 0,
        },0)
        .set(content, {
            display:'block',
        })
        .to(contentTitle, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top:'0px',
            autoAlpha: 1,
        })
        .to(contentSubtitle, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top:'0px',
            autoAlpha: 1,
        },'-=0.22')
        .to(contentPara, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top:'0px',
            autoAlpha: 1,
        },'-=0.22');
        e.classList.add('open');
        
    }

    closeBox(){
        let e = this.getCurrent();
        var tl1 = new TimelineMax({repeat:0});
        const bg = e.querySelectorAll('.bg');
        const title = e.querySelectorAll('.title');
        const content = this.DOM.content;
        const contentTitle = this.DOM.content.querySelectorAll('.content__title');
        const contentSubtitle = this.DOM.content.querySelectorAll('.content__subtitle');
        const contentPara = this.DOM.content.querySelectorAll('.content__para');

        tl1.set(title, {
            top: '20em',
        })
        .to(contentTitle, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top:'-10px',
            autoAlpha: 0,
        })
        .to(contentSubtitle, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top:'-10px',
            autoAlpha: 0,
        }, '-=0.25')
        .to(contentPara, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top:'-10px',
            autoAlpha: 0,
        }, '-=0.25')
        .set(content, {
            display:'none',
        })
        .to(bg, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top: '50%',
            left: '20%',
            scale: 1,
        })
        .to(title, this.config.animation.speed.fast, {
            ease: this.config.animation.ease.power01,
            top: '0em',
            autoAlpha: 1,
        },'-=0.2')
        .set(e, {
            zIndex:100,
        });
        e.classList.remove('open');
        
    }

    enterBox(e){
        var tl1 = new TimelineMax({repeat:0});
        const title = e.querySelectorAll('.title');
        const boxInner = e.querySelectorAll('.box-inner');
            tl1.to(boxInner, this.config.animation.speed.fast, {
                ease: this.config.animation.ease.power01,
                scale: 1.08,
            },0).to(title, this.config.animation.speed.fast, {
                ease: this.config.animation.ease.power01,
                top: '10em',
            },0);
    }

    leaveBox(e){
        var tl1 = new TimelineMax({repeat:0});
        const title = e.querySelectorAll('.title');
        const boxInner = e.querySelectorAll('.box-inner');
            tl1.to(title, this.config.animation.speed.fast, {
                ease: this.config.animation.ease.power01,
                top: '0em',
            },0)
            .to(boxInner, this.config.animation.speed.fast, {
                ease: this.config.animation.ease.power01,
                scale: 1,
            },0);
    }


    setCurrent(e){
        this.currentSlide = e;
    }

    getCurrent(){
        return this.currentSlide;
    }

    

}

const app = new App();

const closePopup = function(){
    app.closeBox();
}

const openPopup = function(e){
    app.setCurrent(e);
    app.openBox();
}

const enterBox = function(e){
    app.enterBox(e);
}

const leaveBox = function(e){
    app.leaveBox(e);
}
