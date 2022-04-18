// while (1 == 1){
//     try {
//         document.querySelector('iframe').style = 'width: 0px;';
//     } catch {
//         continue
//     }

// }
// var stuffffffs = document.createElement('div')
// stuffffffs.style = 'background-color: white; height: 100000000px; width: 100%; z-index: 2147483647; position: absolute; top: 0px;'
// document.body.appendChild(stuffffffs);
// setTimeout(function () {
//     document.body.removeChild(stuffffffs)
// }, 3000)

if (window.location.hostname == 'replit.com' || window.location.hostname == 'docs.google.com' || window.location.hostname == 'editor.wix.com') {
    console.log('hi')
} else {
    var things = document.querySelectorAll('iframe')
    thing()


    function delay(message) {
        return new Promise((resolve) => setTimeout(function () {
            things = document.querySelectorAll('iframe')
            things.forEach(function (thing) {
                if (thing.className == 'old-portals-iframe') {
                    console.log('nope')
                } else {
                    thing.style = 'display: none;'
                }

            })
            resolve();
        }, 0))
    }
    function thing() {
        (async () => {
            while (true) {
                console.log("Start")
                try {
                    await delay("No")
                } catch {
                    continue
                }

                console.log("End")
            }

        })();
    }

}
