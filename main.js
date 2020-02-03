



const api = new APIManager()
const renderer = new Renderer()



$("#loadButton").click(function() {
    api.compileData()
  })


$("#displayButton").click(function() {
    renderer.render(api.data)
  })

  
  $("#saveUserButton").click(function() {
    localStorage.userSettings=JSON.stringify(api.data)
  })


$("#loadUserButton").click(function() {
    renderer.render(JSON.parse(localStorage.userSettings))
  })

  