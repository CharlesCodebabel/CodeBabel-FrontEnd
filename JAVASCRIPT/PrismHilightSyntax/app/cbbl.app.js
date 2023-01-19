// Created by CodeBabel FrontEnd ~ 202x

const DnPy = () => {
    const link = document.createElement("a");
    const content = document.querySelector("#textarea").value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "example.py";
    link.click();
    URL.revokeObjectURL(link.href);
};

const DnCs = () => {
    const link = document.createElement("a");
    const content = document.querySelector("#textarea_css").value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "example.css";
    link.click();
    URL.revokeObjectURL(link.href);
};

function Msg(){
    window.alert('CodeBabel EasyUseThis!.');
}