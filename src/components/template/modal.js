export default function modal(content, opened) {
    return `
    <div class="modal">${content}</div>
    <style>
    .modal {
        position: absolute;
        display: ${opened ? "flex": "none"};
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
    }
    </style>
    `
}