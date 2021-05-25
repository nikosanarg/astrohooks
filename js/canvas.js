function p2_x1_calc() {
    let [i1, i2, i3] = catch_inputs('p2-x1', 3);
    let cp2 = document.getElementById('canvas-p2');
    let ctx = cp2.getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
    let centerX = 160, centerY = 150, radius = 120, amplitud = 35;
    let radians = gms2rad(i1, i2, i3);
    let posX = radius * Math.cos(radians);
    let posY = radius * Math.abs(Math.sin(radians));
    let PCsuperior, PCinferior, pCardinalDerecha, pCardinalIzquierda, pCardinalSuperior, pCardinalInferior, gName;
    if (radians > 0) {
        PCsuperior = "PCN";
        PCinferior = "PCS";
        pCardinalIzquierda = "HN";
        pCardinalDerecha = "HS";
        pCardinalSuperior = "E";
        pCardinalInferior = "W";
    } else if (radians < 0) {
        PCsuperior = "PCS";
        PCinferior = "PCN";
        pCardinalIzquierda = "HS";
        pCardinalDerecha = "HN";
        pCardinalSuperior = "W";
        pCardinalInferior = "E";
    } else {
        PCsuperior = "";
        PCinferior = "";
        pCardinalIzquierda = "";
        pCardinalDerecha = "";
        pCardinalSuperior = "";
        pCardinalInferior = "";
    }
    (Math.abs(radians) > 0.5) ? gName = "Ø" : gName = "";

    // curva punteada trasera del horizonte
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius, amplitud, Math.PI, 0, Math.PI);
    ctx.setLineDash([10, 10]);
    ctx.lineWidth = 1;
    ctx.strokeStyle="dodgerblue";
    ctx.stroke();

    // línea punteada central del horizonte
    ctx.beginPath();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.strokeStyle="dodgerblue";
    ctx.stroke();

    // línea punteada central del horizonte
    ctx.beginPath();
    ctx.moveTo(centerX - posY, centerY + posX);
    ctx.lineTo(centerX + posY, centerY - posX);
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.strokeStyle="orange";
    ctx.stroke();

    // recta complementaria del ángulo -> punto PC inferior
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + posX, centerY + posY);
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.strokeStyle="grey";
    ctx.stroke();

    // curva punteada trasera del ecuador
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius, amplitud, Math.abs(radians) + Math.PI/2, 0, Math.PI);
    ctx.setLineDash([10, 10]);
    ctx.lineWidth = 1;
    ctx.strokeStyle="orange";
    ctx.stroke();

    // línea punteada cenit-nadir
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.setLineDash([13, 5]);
    ctx.lineWidth = 1;
    ctx.strokeStyle="violet";
    ctx.stroke();

    // curva del ángulo
    ctx.beginPath();
    ctx.arc(centerX, centerY, 35, Math.PI, Math.abs(radians) - Math.PI + 0.001);
    ctx.setLineDash([]);
    ctx.lineWidth = 3;
    ctx.strokeStyle="green";
    ctx.stroke();

    // recta del ángulo -> punto PC superior
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - posX, centerY - posY);
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.strokeStyle="black";
    ctx.stroke();

    // circunferencia principal & meridiano del lugar
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.strokeStyle="red";
    ctx.stroke();
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Meridiano", 300, 30);

    // curva frontal del ecuador
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius, amplitud, Math.abs(radians) - Math.PI/2, 0, Math.PI);
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.strokeStyle="orange";
    ctx.stroke();
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText("Ecuador", 300, 70);

    // curva frontal del horizonte
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radius, amplitud, 0, 0, Math.PI);
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.strokeStyle="dodgerblue";
    ctx.stroke();
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "dodgerblue";
    ctx.fillText("Horizonte", 300, 50);

    ctx.fillStyle = "dodgerblue";
    ctx.fillText(pCardinalDerecha, centerX+radius+5, centerY+7);
    ctx.fillStyle = "dodgerblue";
    ctx.fillText(pCardinalIzquierda, centerX-radius-27, centerY+7);
    ctx.fillStyle = "blue";
    ctx.fillText(pCardinalSuperior, centerX-35, centerY-35);
    ctx.fillStyle = "blue";
    ctx.fillText(pCardinalInferior, centerX+25, centerY+50);
    ctx.fillStyle = "purple";
    ctx.fillText("cenit", centerX-17, centerY-radius-5);
    ctx.fillStyle = "purple";
    ctx.fillText("nadir", centerX-17, centerY+radius+17);
    ctx.fillStyle = "purple";
    ctx.fillText("O", centerX+3, centerY-3);
    ctx.fillStyle = "black";
    ctx.fillText(PCsuperior, centerX-posX-35, centerY-posY-10);
    ctx.fillStyle = "black";
    ctx.fillText(PCinferior, centerX+posX+2, centerY+posY+20);
    ctx.fillStyle = "green";
    ctx.fillText(gName, centerX-50, centerY-5);
}