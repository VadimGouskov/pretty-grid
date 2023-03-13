type HomePageFeature = {
    img: string;
    title: string;
    text: string
}
export const useHomepageFeatures = (): HomePageFeature[] => {
    return [
        { img: "/ellipse-grid.png", title: "test", text: "tester" },
        { img: "/ellipse-grid.png", title: "test", text: "tester" },
        { img: "/ellipse-grid.png", title: "test", text: "tester" },
        { img: "/ellipse-grid.png", title: "test", text: "tester" },
        { img: "/ellipse-grid.png", title: "test", text: "tester" },
        { img: "/ellipse-grid.png", title: "test", text: "tester" }
    ]
}