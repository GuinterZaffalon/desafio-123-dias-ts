function distanciaPlano(Ax: number, Ay: number, Bx: number, By: number) {
    const dx = Ax - Bx;
    const dy = Ay - By;

    const distancia = Math.sqrt(dx ** 2 + dy ** 2);
    return distancia;
}

console.log(distanciaPlano(6,7,8,9))