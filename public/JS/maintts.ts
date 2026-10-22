function showTime(): void{
    const output = document.getElementById("test")as HTMLParagraphElement;
    output.innerHTML = Date();
}

document.getElementById("timeButton")?.addEventListener("click", showTime);