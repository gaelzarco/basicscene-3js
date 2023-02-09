// Scene
const scene = new THREE.Scene()

// White Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'white' })
const mesh = new THREE.Mesh(geometry, material)
// Add it to the scene
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width/ sizes.height )
// Add it to the scene
scene.add(camera)