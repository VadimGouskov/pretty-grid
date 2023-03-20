type HomePageFeature = {
    img: string;
    title: string;
    text: string
}
export const useHomepageFeatures = (): HomePageFeature[] => {
    return [
        { img: "/features/2dgrid-orange.png", title: "Define a grid in 1 line of code", text: "tester" },
        { img: "/features/2d-grid-ellipse-orange.png", title: "Use multiple shapes", text: "tester" },
        { img: "/features/3d-grid-orange.png", title: "In 2 or 3 dimensions", text: "tester" },
        { img: "/features/2d-grid-select-orange.png", title: "Easily select areas", text: "tester" },
        { img: "/features/2d-grid-transform-orange.png", title: "Transform points", text: "tester" },
        { img: "/features/3d-grid-select-multiple.png", title: "Combine selections and transformations to create complex patterns", text: "tester" }
    ]
}