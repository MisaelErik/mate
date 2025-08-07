const simpleProblems = [
    {
        id: 's1',
        question: 'Halle el interés simple que generó un principal de 4 000 um, colocado en un banco a una TNA de 0,36 durante 6 días.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 4.000 um</li>
                        <li>j = 0,36 (TNA)</li>
                        <li>n = 6 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P\cdot j \cdot n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años (considerando un año de 360 días): <img src="https://latex.codecogs.com/svg.image?n=\frac{6}{360}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=4000\cdot0,36\cdot\frac{6}{360}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>24 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's2',
        question: '¿Cuánto es el interés simple que generó un principal de 3 000 um en el plazo de 8 meses, colocado a una TNA de 0,48?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 3.000 um</li>
                        <li>j = 0,48 (TNA)</li>
                        <li>n = 8 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P\cdot j \cdot n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{8}{12}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=3000\cdot0,48\cdot\frac{8}{12}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>960 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's3',
        question: '¿Cuánto interés simple devengó un principal de 10 000 um, en 1 año, 2 meses y 26 días, colocado a una TNM de 0,02?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 10.000 um</li>
                        <li>j = 0,02 (TNM)</li>
                        <li>n = 1 año, 2 meses y 26 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P\cdot j \cdot n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=12+2+\frac{26}{30}=14,8667" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=10000\cdot0,02\cdot14,8667" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>2,973.34 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's4',
        question: '¿Cuánto interés simple puede disponerse el 18 de mayo, si el 15 de abril del mismo año se invirtió un principal de 5 000 um, a una TNA de 0,24?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>Fechas: 15 de abril al 18 de mayo</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P\cdot j \cdot n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos los días entre las fechas: abril (30-15 = 15 días) + mayo (18 días) = 33 días. Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{33}{360}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=5000\cdot0,24\cdot\frac{33}{360}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>110 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's5',
        question: 'Calcule el interés simple que produjo un principal de 2 000 um, colocado desde el 12 de marzo al 15 de junio del mismo año. En esta operación se aplicó una TNT de 0,075.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 2.000 um</li>
                        <li>j = 0,075 (TNT)</li>
                        <li>Fechas: 12 de marzo al 15 de junio</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P\cdot j \cdot n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos los días: marzo (31-12=19) + abril(30) + mayo(31) + junio(15) = 95 días. Convertimos el tiempo a trimestres: <img src="https://latex.codecogs.com/svg.image?n=\frac{95}{90}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=2000\cdot0,075\cdot\frac{95}{90}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>158.33 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's6',
        question: '¿Qué principal colocado a una TNA de 0,24 produce 300 um de interés simple durante 18 semanas?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>I = 300 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>n = 18 semanas</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{j\cdot n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{18}{52}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{300}{0,24\cdot\frac{18}{52}}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>3,611.11 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's7',
        question: '¿Cuánto es el importe de un principal que, colocado en un banco durante 7 trimestres a una TNA de 0,26, produjo un interés simple de 800 um?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>I = 800 um</li>
                        <li>j = 0,26 (TNA)</li>
                        <li>n = 7 trimestres</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{j\cdot n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{7}{4}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{800}{0,26\cdot\frac{7}{4}}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>1,758.24 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's8',
        question: 'Si se desea ganar un interés simple de 3 000 um, en el período comprendido entre el 4 de abril y 31 de mayo del mismo año, ¿qué principal debe colocarse en un banco si devenga una TNM de 0,02?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>I = 3.000 um</li>
                        <li>j = 0,02 (TNM)</li>
                        <li>Fechas: 4 de abril a 31 de mayo</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{j\cdot n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos los días: abril (30-4=26) + mayo(31) = 57 días. Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{57}{30}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{3000}{0,02\cdot\frac{57}{30}}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>78,947.37 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's9',
        question: '¿Cuánto es la TNM aplicada para que un principal de 8 000 um, colocado a 2 años y 6 meses, haya ganado 6 000 um de interés simple?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 8.000 um</li>
                        <li>I = 6.000 um</li>
                        <li>n = 2 años y 6 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{I}{P\cdot n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=2\cdot12+6=30" /> meses.</p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{6000}{8000\cdot30}=\frac{6000}{240000}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: j = <strong>0.025 TNM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's10',
        question: 'Un principal de 2 000 um produjo un interés simple de 60 um en el plazo de 30 días. ¿Cuál fue la TNA que se aplicó a esa operación?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 2.000 um</li>
                        <li>I = 60 um</li>
                        <li>n = 30 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{I}{P\cdot n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{30}{360}" /></p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{60}{2000\cdot\frac{30}{360}}=\frac{60}{166,67}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: j = <strong>0.36 TNA</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's11',
        question: '¿Durante cuántos días estuvo colocado un principal de 15 000 um que devengó una TNA de 0,28, si el interés simple que produjo fue 350 um?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 15.000 um</li>
                        <li>j = 0,28 (TNA)</li>
                        <li>I = 350 um</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{I}{P\cdot j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">El resultado será en años. Para obtener los días, multiplicamos por 360. <img src="https://latex.codecogs.com/svg.image?n=\frac{350}{15000\cdot0,28}=0,08333" /> años. Días = <img src="https://latex.codecogs.com/svg.image?0,08333\cdot360=30" /> días.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>30 días</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's12',
        question: 'Un principal de 12 000 um, colocado a una TNA de 0,125 generó 541.68 um de interés simple. Calcule el tiempo de la operación medido en días.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 12.000 um</li>
                        <li>j = 0,125 (TNA)</li>
                        <li>I = 541,68 um</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{I}{P\cdot j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">El resultado será en años. Para obtener los días, multiplicamos por 360. <img src="https://latex.codecogs.com/svg.image?n=\frac{541,68}{12000\cdot0,125}=0,36112" /> años. Días = <img src="https://latex.codecogs.com/svg.image?0,36112\cdot360=130" /> días.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>130 días</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's13',
        question: '¿Por cuánto tiempo se impuso un principal de 10 000 um, que devengó una TNM de 0,02 y produjo un interés simple de 2 000 um?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 10.000 um</li>
                        <li>j = 0,02 (TNM)</li>
                        <li>I = 2.000 um</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{I}{P\cdot j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">El resultado será en meses. <img src="https://latex.codecogs.com/svg.image?n=\frac{2000}{10000\cdot0,02}=\frac{2000}{200}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>10 meses</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's14',
        question: 'Calcule el interés simple incluido en un monto de 4 000 um obtenido de un principal que se colocó en un banco a una TNA de 0,24 durante 90 días.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 4.000 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>n = 90 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <p class="text-sm">Primero, calculamos el principal (<img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />) y luego el interés (<img src="https://latex.codecogs.com/svg.image?I=S-P}" />).</p>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{90}{360}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{4000}{1+(0,24\cdot\frac{90}{360})}=\frac{4000}{1+0,06}=\frac{4000}{1,06}=3773,58" />. Calculamos el interés: <img src="https://latex.codecogs.com/svg.image?I=4000-3773,58=226,42" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>226.42 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's15',
        question: '¿Qué principal debe invertirse a una TNA de 0,24 para formar un monto simple de 5 000 um dentro de 45 días?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 5.000 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>n = 45 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{45}{360}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{5000}{1+(0,24\cdot\frac{45}{360})}=\frac{5000}{1+0,03}=\frac{5000}{1,03}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>4,854.37 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's16',
        question: 'La suma de un principal y su interés simple, generado por una TNM de 0,02, fue 20 000 um en el período comprendido entre el 30 de junio y el 31 de diciembre del mismo año. Determine el importe del principal.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 20.000 um</li>
                        <li>j = 0,02 (TNM)</li>
                        <li>Fechas: 30 de junio a 31 de diciembre</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos los días: julio(31)+agosto(31)+sept(30)+oct(31)+nov(30)+dic(31) = 184 días. Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{184}{30}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{20000}{1+(0,02\cdot\frac{184}{30})}=\frac{20000}{1+0,122667}=\frac{20000}{1,122667}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>17,814.73 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's17',
        question: 'Cierto principal colocado durante 6 meses y su interés generado hacen un total de 2000 um. Si la TNC aplicada fue 0,04, ¿cuál es el importe del principal y del interés simple?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 2.000 um</li>
                        <li>j = 0,04 (TNC)</li>
                        <li>n = 6 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <p class="text-sm">Primero el principal (<img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />), luego el interés (<img src="https://latex.codecogs.com/svg.image?I=S-P" />).</p>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a cuatrimestres: <img src="https://latex.codecogs.com/svg.image?n=\frac{6}{4}=1,5" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{2000}{1+(0,04\cdot1,5)}=\frac{2000}{1+0,06}=\frac{2000}{1,06}=1886,79" />. Calculamos el interés: <img src="https://latex.codecogs.com/svg.image?I=2000-1886,79=113,21" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>1,886.79 um</strong>, I = <strong>113.21 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's18',
        question: 'Un capital se colocó en un banco durante 4 meses a interés simple, al final de ese plazo se convirtió en un monto simple de 2 500 um con una TNT de 0,04. Calcule el importe del capital inicial.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 2.500 um</li>
                        <li>j = 0,04 (TNT)</li>
                        <li>n = 4 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a trimestres: <img src="https://latex.codecogs.com/svg.image?n=\frac{4}{3}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{2500}{1+(0,04\cdot\frac{4}{3})}=\frac{2500}{1+0,05333}=\frac{2500}{1,05333}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>2,373.49 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's19',
        question: 'Calcule el monto simple de un depósito de ahorro de 5 000 um colocado el 9 de agosto y cancelado el 1 de setiembre del mismo año. Las TNAs son: 0,3 a partir del 1 de agosto, 0,28 a partir del 16 de agosto y 0,26 a partir del 1 de setiembre.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>TNA₁ = 0,3 (9 al 15 de agosto, 7 días)</li>
                        <li>TNA₂ = 0,28 (16 al 31 de agosto, 16 días)</li>
                        <li>TNA₃ = 0,26 (1 de sept)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P\left(1+\sum_{k=1}^{z} j_k n_k\right)" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Horizonte temporal: 9 de agosto al 1 de septiembre. Total de días: (31-9)+1=23 días.
                    La tercera tasa se aplica el 1 de septiembre, por lo que el tramo es de 1 día.</p>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=5000\cdot((0,30\cdot\frac{7}{360})+(0,28\cdot\frac{16}{360})+(0,26\cdot\frac{1}{360}))=5000\cdot(0,0058333+0,0124444+0,0007222)=5000\cdot0,019" />
                    </div>
                    <p class="text-sm"><img src="https://latex.codecogs.com/svg.image?S=P+I=5000+95" /></p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>5,095 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's20',
        question: 'Una línea de avance en cuenta corriente que genera un interés simple con una TNA de 0,18 estuvo sobregirada desde el 2 de abril hasta el 28 del mismo mes, en ese plazo la cuenta tuvo el siguiente movimiento. Calcule el monto simple que debe pagarse el 28/04 para cancelar la línea de avance en cuenta corriente.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>TNA = 0,18</li>
                        <li>2/4 sobregiro -50,000 um</li>
                        <li>7/4 amortización 10,000 um</li>
                        <li>13/4 amortización 30,000 um</li>
                        <li>28/4 cancelación</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <p class="text-sm">Se aplica la fórmula de interés simple para cada período y luego se suman los intereses.</p>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">1. Periodo 2/4 a 7/4 (5 días): <img src="https://latex.codecogs.com/svg.image?I_1=50000\cdot0,18\cdot\frac{5}{360}=125" />. Saldo: <img src="https://latex.codecogs.com/svg.image?50000-10000=40000" />.</p>
                    <p class="text-sm">2. Periodo 7/4 a 13/4 (6 días): <img src="https://latex.codecogs.com/svg.image?I_2=40000\cdot0,18\cdot\frac{6}{360}=120" />. Saldo: <img src="https://latex.codecogs.com/svg.image?40000-30000=10000" />.</p>
                    <p class="text-sm">3. Periodo 13/4 a 28/4 (15 días): <img src="https://latex.codecogs.com/svg.image?I_3=10000\cdot0,18\cdot\frac{15}{360}=75" />.</p>
                    <p class="text-sm">Monto total a pagar = Saldo final + Intereses = <img src="https://latex.codecogs.com/svg.image?10000+125+120+75" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>10,320 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's21',
        question: 'Una cuenta de ahorros que devenga una TNA variable tuvo el siguiente movimiento durante los meses de marzo y abril del mismo año. Calcule el monto simple que debe retirarse en la fecha de cancelación de la cuenta.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>02/03 Depósito 5000 um, TNA=0.12</li>
                        <li>12/03 Cambio de tasa a TNA=0.11</li>
                        <li>18/03 Retiro 1000 um</li>
                        <li>26/03 Depósito 2000 um</li>
                        <li>01/04 Cancelación</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P_0+I_1+I_2+I_3+... " />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">1. Interés del 2/3 al 12/3 (10 días): <img src="https://latex.codecogs.com/svg.image?I_1=5000\cdot0,12\cdot\frac{10}{360}=16,67" />. Saldo al 12/3: <img src="https://latex.codecogs.com/svg.image?5000+16,67=5016,67" />.</p>
                    <p class="text-sm">2. Interés del 12/3 al 18/3 (6 días): <img src="https://latex.codecogs.com/svg.image?I_2=5016,67\cdot0,11\cdot\frac{6}{360}=9,20" />. Saldo al 18/3: <img src="https://latex.codecogs.com/svg.image?5016,67-1000+9,20=4025,87" />.</p>
                    <p class="text-sm">3. Interés del 18/3 al 26/3 (8 días): <img src="https://latex.codecogs.com/svg.image?I_3=4025,87\cdot0,11\cdot\frac{8}{360}=9,84" />. Saldo al 26/3: <img src="https://latex.codecogs.com/svg.image?4025,87+2000+9,84=6035,71" />.</p>
                    <p class="text-sm">4. Interés del 26/3 al 1/4 (6 días): <img src="https://latex.codecogs.com/svg.image?I_4=6035,71\cdot0,11\cdot\frac{6}{360}=11,06" />. Monto total a retirar: <img src="https://latex.codecogs.com/svg.image?6035,71+11,06=6046,77" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>6,046.77 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's22',
        question: '¿Qué principal se colocó a una TNA de 0,2; si al cabo de 38 días se convirtió en un monto simple de 5 000 um?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 5.000 um</li>
                        <li>j = 0,2 (TNA)</li>
                        <li>n = 38 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{38}{360}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{5000}{1+(0,2\cdot\frac{38}{360})}=\frac{5000}{1+0,02111}=\frac{5000}{1,02111}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>4,896.61 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's23',
        question: 'Encuentre el principal que invertido a una TNB (bimestral) de 0,04 durante 87 días produjo un monto simple de 500 um.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 500 um</li>
                        <li>j = 0,04 (TNB)</li>
                        <li>n = 87 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a bimestres (60 días): <img src="https://latex.codecogs.com/svg.image?n=\frac{87}{60}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{500}{1+(0,04\cdot\frac{87}{60})}=\frac{500}{1+0,058}=\frac{500}{1,058}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>472.59 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's24',
        question: '¿A qué TNM un principal de 10 000 um se habrá convertido en un monto de 11 125 um, si fue colocado a interés simple durante 3 meses?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 10.000 um</li>
                        <li>S = 11.125 um</li>
                        <li>n = 3 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{S/P-1}{n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{11125/10000-1}{3}=\frac{1,1125-1}{3}=\frac{0,1125}{3}" />
                    </div>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: j = <strong>0.0375 TNM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's25',
        question: 'Con tarjeta de crédito se vendió un artículo cuyo precio al contado es 120 um, para pagar 127,20 um dentro de 45 días. ¿Qué TNM de interés simple se cargó al crédito?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 120 um</li>
                        <li>S = 127,20 um</li>
                        <li>n = 45 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=\frac{S/P-1}{n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{45}{30}=1,5" /> meses. <img src="https://latex.codecogs.com/svg.image?j=\frac{127,20/120-1}{1,5}=\frac{1,06-1}{1,5}=\frac{0,06}{1,5}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: j = <strong>0.04 TNM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's26',
        question: 'Un principal de 5000 um, colocado a interés simple a una TNA de 0,24 se incrementó en 15%. Se requiere hallar el plazo de la operación.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>S = 5.000 * (1 + 0.15) = 5.750 um</li>
                        <li>j = 0,24 (TNA)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{S/P-1}{j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">El resultado será en años. <img src="https://latex.codecogs.com/svg.image?n=\frac{5750/5000-1}{0,24}=\frac{1,15-1}{0,24}=\frac{0,15}{0,24}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>0.625 años o 225 días</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's27',
        question: '¿En cuántos días una inversión de 7 000 um se convertirá en un monto simple de 7 933,34 um y percibirá una TNA de 0.24?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 7.000 um</li>
                        <li>S = 7.933,34 um</li>
                        <li>j = 0,24 (TNA)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{S/P-1}{j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">El resultado será en años. Para obtener los días, multiplicamos por 360. <img src="https://latex.codecogs.com/svg.image?n=\frac{7933,34/7000-1}{0,24}=\frac{1,133334-1}{0,24}=0,555558" /> años. Días = <img src="https://latex.codecogs.com/svg.image?0,555558\cdot360=200" /> días.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>200 días</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's28',
        question: '¿En cuántos días se duplicará un importe si se coloca a interés simple en un banco, a una TNA de 0,24?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 2P</li>
                        <li>j = 0,24 (TNA)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{S/P-1}{j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Reemplazamos S/P por 2. <img src="https://latex.codecogs.com/svg.image?n=\frac{2-1}{0,24}=\frac{1}{0,24}=4,1667" /> años. Días = <img src="https://latex.codecogs.com/svg.image?4,1667\cdot360=1500" /> días.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>1500 días</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's29',
        question: '¿En qué tiempo se triplicará un principal colocado a interés simple, a una TNM de 0,05?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 3P</li>
                        <li>j = 0,05 (TNM)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{S/P-1}{j}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Reemplazamos S/P por 3. <img src="https://latex.codecogs.com/svg.image?n=\frac{3-1}{0,05}=\frac{2}{0,05}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>40 meses</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 's30',
        question: '¿Cuánto debe invertirse hoy en una operación a interés simple para acumular 20 000 um dentro 120 días; la inversión colocada en una institución de crédito devenga una TNA de 0,36?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 20.000 um</li>
                        <li>j = 0,36 (TNA)</li>
                        <li>n = 120 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{S}{1+jn}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{120}{360}" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{20000}{1+(0,36\cdot\frac{120}{360})}=\frac{20000}{1+0,12}=\frac{20000}{1,12}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>17,857.14 um</strong></p>
                </div>
            </div>
        `
    },
];

const compoundProblems = [
    {
        id: 'c1',
        question: '¿Qué monto compuesto habrá acumulado una persona en una cuenta de ahorros, del 4 al 16 de octubre del mismo año, si percibe una TEM de 0,03, y su depósito inicial fue 2 500 um? ¿Cuál es el FSC?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 2.500 um</li>
                        <li>i = 0,03 (TEM)</li>
                        <li>Fechas: 4 al 16 de octubre</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P(1+i)^n" />
                    </div>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?FSC=(1+i)^n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos los días: 16 - 4 = 12 días. Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{12}{30}" />. <img src="https://latex.codecogs.com/svg.image?FSC=(1+0,03)^{\frac{12}{30}}=(1,03)^{0,4}=1,011956" />. <img src="https://latex.codecogs.com/svg.image?S=2500\cdot1,011956=2529,89" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>2,529.89 um</strong>, FSC = <strong>1.011956</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c2',
        question: '¿Qué monto debe dejarse en una letra de cambio con vencimiento dentro de 38 días, si después de su descuento en el banco se requiere disponer de un importe neto de 20 000 um? Esta operación devenga una TEM de 0.033. ¿Cuál es el FSC?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 20.000 um</li>
                        <li>i = 0,033 (TEM)</li>
                        <li>n = 38 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P(1+i)^n" />
                    </div>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?FSC=(1+i)^n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{38}{30}" />. <img src="https://latex.codecogs.com/svg.image?FSC=(1+0,033)^{\frac{38}{30}}=(1,033)^{1,2667}=1,0423" />. <img src="https://latex.codecogs.com/svg.image?S=20000\cdot1,0423=20846" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>20,846 um</strong>, FSC = <strong>1.0423</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c3',
        question: 'Si la población de un país es 24 millones de habitantes y su tasa promedio de crecimiento geométrico anual es 0,0201, ¿cuántos habitantes habrán dentro de año y medio?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 24.000.000 hab</li>
                        <li>i = 0,0201 (TEA)</li>
                        <li>n = 1,5 años</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P(1+i)^n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Aplicamos la fórmula de interés compuesto para calcular la población futura. <img src="https://latex.codecogs.com/svg.image?S=24000000\cdot(1+0,0201)^{1,5}=24000000\cdot(1,0201)^{1,5}" />. <img src="https://latex.codecogs.com/svg.image?S=24000000\cdot1,03028" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>24,726,720 habitantes</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c4',
        question: 'Hace 4 meses se colocó en un banco un capital que devenga una TEM de 0,03, lo que permitió acumular un monto de 2000 um. ¿Cuánto fue el importe de ese capital?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 2.000 um</li>
                        <li>i = 0,03 (TEM)</li>
                        <li>n = 4 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=S(1+i)^{-n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm"><img src="https://latex.codecogs.com/svg.image?P=2000\cdot(1+0,03)^{-4}=2000\cdot(1,03)^{-4}=2000\cdot0,888487" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>1,776.97 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c5',
        question: 'Calcule el importe del principal que colocado en un banco devengó una TEM de 0,03 durante 87 días y generó un monto de 500 um.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 500 um</li>
                        <li>i = 0,03 (TEM)</li>
                        <li>n = 87 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=S(1+i)^{-n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{87}{30}=2,9" />. <img src="https://latex.codecogs.com/svg.image?P=500\cdot(1+0,03)^{-2,9}=500\cdot(1,03)^{-2,9}=500\cdot0,916327" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>458.16 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c6',
        question: 'Después de 3 meses de colocar un principal de 3 000 um en un banco, se obtuvo un monto de 3 500 um. Calcule la TEM aplicada en la operación.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 3.000 um</li>
                        <li>S = 3.500 um</li>
                        <li>n = 3 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm"><img src="https://latex.codecogs.com/svg.image?i=\left(\frac{3500}{3000}\right)^{1/3}-1=(1,166667)^{0,333333}-1=1,05273-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.05273 TEM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c7',
        question: 'Se adquirió una máquina cuyo precio de contado es 6000 um, se pagó una cuota inicial de 2 000 um y el saldo fue financiado con una letra de cambio a 45 días por el monto de 4 150,94 um. ¿Cuál fue la TEM cargada en esta operación?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>Precio de contado = 6.000 um</li>
                        <li>Cuota inicial = 2.000 um</li>
                        <li>Principal (P) = <img src="https://latex.codecogs.com/svg.image?6000-2000=4000" /> um</li>
                        <li>S = 4.150,94 um</li>
                        <li>n = 45 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{45}{30}=1,5" /> meses. <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{4150,94}{4000}\right)^{1/1,5}-1=(1,037735)^{0,666667}-1=1,025-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.025 TEM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c8',
        question: 'Un bono fue comprado en 2000 um y vendido al cabo de 90 días en 2 315,25 um. ¿Cuál fue la TEM que generó esta operación?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 2.000 um</li>
                        <li>S = 2.315,25 um</li>
                        <li>n = 90 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{90}{30}=3" /> meses. <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{2315,25}{2000}\right)^{1/3}-1=(1,157625)^{0,333333}-1=1,05-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.05 TEM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c9',
        question: 'La población de una ciudad se triplica cada 40 años. Dado un crecimiento exponencial, ¿qué tasa de crecimiento promedio anual tiene?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 3P</li>
                        <li>n = 40 años</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Reemplazamos S/P por 3. <img src="https://latex.codecogs.com/svg.image?i=(3)^{1/40}-1=1,027845-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.027845 TEA</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c10',
        question: '¿A qué tiempo se podrá triplicar un capital colocado a una TEA de 0,200936955?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 3P</li>
                        <li>i = 0,200936955 (TEA)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(S/P)}{\log(1+i)}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Reemplazamos S/P por 3. <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(3)}{\log(1+0,200936955)}=\frac{\log(3)}{\log(1,200936955)}=\frac{0,477121}{0,079509}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>6 años</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c11',
        question: 'Después de colocar un capital de 1 000 um que devenga una TEM de 0,03 se obtuvo un monto de 1 425,76 um. ¿A qué tiempo se colocó el capital?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 1.000 um</li>
                        <li>S = 1.425,76 um</li>
                        <li>i = 0,03 (TEM)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(S/P)}{\log(1+i)}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm"><img src="https://latex.codecogs.com/svg.image?n=\frac{\log(1425,76/1000)}{\log(1+0,03)}=\frac{\log(1,42576)}{\log(1,03)}=\frac{0,154034}{0,012837}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>12 meses</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c12',
        question: '¿En cuántos años se triplicará y cuadruplicará un capital colocado a una TEA de 0,18?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S₁ = 3P</li>
                        <li>S₂ = 4P</li>
                        <li>i = 0,18 (TEA)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(S/P)}{\log(1+i)}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Para triplicarse: <img src="https://latex.codecogs.com/svg.image?n_1=\frac{\log(3)}{\log(1,18)}=6,638" /> años. Para cuadruplicarse: <img src="https://latex.codecogs.com/svg.image?n_2=\frac{\log(4)}{\log(1,18)}=8,376" /> años.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: Triplicar = <strong>6.64 años</strong>, Cuadruplicar = <strong>8.38 años</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c13',
        question: 'Se requiere calcular el monto compuesto que produjo una cuenta abierta con un principal de 7 000 um, la cual se mantuvo vigente del 11 de julio al 24 de setiembre del mismo año. La TEA que originalmente fue 0,24, se redujo a 0,22 el 28 de agosto y se mantuvo en este valor hasta el término del horizonte temporal.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 7.000 um</li>
                        <li>TEA₁ = 0,24 (del 11/7 al 28/8)</li>
                        <li>TEA₂ = 0,22 (del 28/8 al 24/9)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P[(1+i_1)^{n_1}(1+i_2)^{n_2}]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Días del primer período: (31-11) en julio + (28) en agosto = 48 días. Días del segundo período: (31-28) en agosto + 24 en septiembre = 27 días. Total: 75 días. Tasas diarias: <img src="https://latex.codecogs.com/svg.image?i_{d1}=(1,24)^{1/360}-1=0,000596" />; <img src="https://latex.codecogs.com/svg.image?i_{d2}=(1,22)^{1/360}-1=0,000552" />. <img src="https://latex.codecogs.com/svg.image?S=7000\cdot(1+0,000596)^{48}\cdot(1+0,000552)^{27}" />. <img src="https://latex.codecogs.com/svg.image?S=7000\cdot1,029054\cdot1,015024=7000\cdot1,044557" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>7,311.90 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c14',
        question: 'El 11 de julio se suscribió un contrato de crédito por 80 000 um que devenga una TEM de 0,015 y que puede variar durante el plazo del crédito cuyo horizonte temporal es 120 días. La TEM varió a 0,014 el 26 de agosto y a 0,013 el 5 de setiembre del mismo año. ¿Cuánto es el monto por cancelar al vencimiento del crédito?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 80.000 um</li>
                        <li>TEM₁ = 0,015 (11/7 al 26/8)</li>
                        <li>TEM₂ = 0,014 (26/8 al 5/9)</li>
                        <li>TEM₃ = 0,013 (5/9 al 8/11)</li>
                        <li>Total días: 120 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P[(1+i_1)^{n_1}(1+i_2)^{n_2}(1+i_3)^{n_3}]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Tasas diarias: <img src="https://latex.codecogs.com/svg.image?i_{d1}=(1,015)^{1/30}-1=0,000496" />; <img src="https://latex.codecogs.com/svg.image?i_{d2}=(1,014)^{1/30}-1=0,000463" />; <img src="https://latex.codecogs.com/svg.image?i_{d3}=(1,013)^{1/30}-1=0,000430" />. Días: 11/7 a 26/8 = 46 días. 26/8 a 5/9 = 10 días. 5/9 a 8/11 = 64 días. Total: 120 días. <img src="https://latex.codecogs.com/svg.image?S=80000\cdot(1+0,000496)^{46}\cdot(1+0,000463)^{10}\cdot(1+0,000430)^{64}" />. <img src="https://latex.codecogs.com/svg.image?S=80000\cdot1,02306\cdot1,00464\cdot1,02796=80000\cdot1,05634" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>84,507.20 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c15',
        question: 'El 20 de setiembre debe cancelarse una deuda de 1 000 um. Al vencimiento del plazo la deuda en mora devengará una TEM de 0,05, la misma que se incrementará a 0,06 el 1 de octubre y a 0,07 el 1 de noviembre. ¿Qué monto debe pagarse el 19 de noviembre del mismo año, fecha en que el cliente canceló la deuda?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 1.000 um</li>
                        <li>TEM₁ = 0,05 (del 20/9 al 30/9, 10 días)</li>
                        <li>TEM₂ = 0,06 (del 1/10 al 31/10, 31 días)</li>
                        <li>TEM₃ = 0,07 (del 1/11 al 19/11, 19 días)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P[(1+i_1)^{n_1}(1+i_2)^{n_2}(1+i_3)^{n_3}]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Tasas diarias: <img src="https://latex.codecogs.com/svg.image?i_{d1}=(1,05)^{1/30}-1=0,001639" />; <img src="https://latex.codecogs.com/svg.image?i_{d2}=(1,06)^{1/30}-1=0,001944" />; <img src="https://latex.codecogs.com/svg.image?i_{d3}=(1,07)^{1/30}-1=0,002248" />. <img src="https://latex.codecogs.com/svg.image?S=1000\cdot(1+0,001639)^{10}\cdot(1+0,001944)^{31}\cdot(1+0,002248)^{19}" />. <img src="https://latex.codecogs.com/svg.image?S=1000\cdot1,01653\cdot1,06198\cdot1,04351=1000\cdot1,12176" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>1,121.76 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c16',
        question: 'Calcule el monto por pagar dentro de 5 meses por un préstamo bancario de 50 000 um, que devenga una TNA de 0,24 con capitalización mensual.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 50.000 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>m = 12 (capitalización mensual)</li>
                        <li>n = 5 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P\left(1+\frac{j}{m}\right)^n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">La tasa efectiva del período de capitalización es <img src="https://latex.codecogs.com/svg.image?i=\frac{0,24}{12}=0,02" /> (TEM). El número de períodos es <img src="https://latex.codecogs.com/svg.image?n=5" /> meses. <img src="https://latex.codecogs.com/svg.image?S=50000\cdot(1+0,02)^5=50000\cdot(1,02)^5=50000\cdot1,104081" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>55,204.04 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c17',
        question: 'Calcule el monto compuesto generado por un depósito a plazo de 20 000 um, colocado en un banco durante 6 meses a una TNA de 0,36 capitalizable diariamente.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 20.000 um</li>
                        <li>j = 0,36 (TNA)</li>
                        <li>m = 360 (capitalización diaria)</li>
                        <li>n = 6 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P\left(1+\frac{j}{m}\right)^n" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">La tasa del período de capitalización es <img src="https://latex.codecogs.com/svg.image?i=\frac{0,36}{360}=0,001" /> (TED). El número de períodos es <img src="https://latex.codecogs.com/svg.image?n=6\cdot30=180" /> días. <img src="https://latex.codecogs.com/svg.image?S=20000\cdot(1+0,001)^{180}=20000\cdot(1,001)^{180}=20000\cdot1,19717" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>23,943.40 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c18',
        question: 'Un préstamo de 500 000 um genera una TNM de 0,01 capitalizable cada 75 días. El préstamo se otorgó el 30 de junio y se canceló el 1 de octubre del mismo año. Calcule el interés compuesto que generó esta operación y el valor de la tasa efectiva del período de la operación.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 500.000 um</li>
                        <li>j = 0,01 (TNM)</li>
                        <li>Capitalización = 75 días</li>
                        <li>Fechas: 30 de junio a 1 de octubre</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P[(1+i)^n-1]" />
                    </div>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i_e=(1+i)^n-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Días: junio(30-30=0) + julio(31) + agosto(31) + sept(30) + oct(1) = 93 días. Tasa efectiva del período de capitalización (75 días): <img src="https://latex.codecogs.com/svg.image?i=0,01\cdot\frac{75}{30}=0,025" />. Número de períodos: <img src="https://latex.codecogs.com/svg.image?n=\frac{93}{75}=1,24" />. <img src="https://latex.codecogs.com/svg.image?i_e=(1+0,025)^{1,24}-1=1,031086-1=0,031086" />. <img src="https://latex.codecogs.com/svg.image?I=500000\cdot0,031086" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>15,543 um</strong>, Tasa efectiva = <strong>0.031086</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c19',
        question: 'Una deuda de 700 000 um se convirtió en un monto de 741 095,06 um en el plazo de 86 días. Calcule la TNA capitalizable quincenalmente. Compruebe su respuesta con la fórmula del monto compuesto.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 700.000 um</li>
                        <li>S = 741.095,06 um</li>
                        <li>n = 86 días</li>
                        <li>Capitalización = quincenal (15 días)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?j=m\left[\left(\frac{S}{P}\right)^{1/n}-1\right]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Número de capitalizaciones en un año (m): <img src="https://latex.codecogs.com/svg.image?360/15=24" />. El número de períodos de la tasa capitalizable es <img src="https://latex.codecogs.com/svg.image?n_p=\frac{86}{15}=5,7333" />. <img src="https://latex.codecogs.com/svg.image?i_{\text{quincenal}}=\left(\frac{741095,06}{700000}\right)^{1/5,7333}-1=(1,058707)^{0,1744}-1=1,0101-1=0,0101" />. TNA = <img src="https://latex.codecogs.com/svg.image?0,0101\cdot24=0,2424" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: TNA = <strong>0.2424</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c20',
        question: '¿Cuánto interés se pagará por un préstamo de 6 000 um que devenga una TET de 0,02? El crédito se utilizó durante 17 días.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 6.000 um</li>
                        <li>i = 0,02 (TET)</li>
                        <li>n = 17 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P[(1+i)^n-1]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">La tasa efectiva diaria es <img src="https://latex.codecogs.com/svg.image?i_d=(1+0,02)^{1/90}-1=0,0002206" />. <img src="https://latex.codecogs.com/svg.image?I=6000\cdot((1,0002206)^{17}-1)=6000\cdot(1,003756-1)=6000\cdot0,003756" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>22.54 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c21',
        question: 'Calcule el interés producido por un capital de 7.000 um, colocado en un banco a una TEM de 0,01, por el período comprendido entre el 3 de abril y 6 de junio del mismo año.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 7.000 um</li>
                        <li>i = 0,01 (TEM)</li>
                        <li>Fechas: 3 de abril a 6 de junio</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P[(1+i)^n-1]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Días: abril (30-3=27) + mayo(31) + junio(6) = 64 días. Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{64}{30}=2,1333" />. <img src="https://latex.codecogs.com/svg.image?I=7000\cdot((1+0,01)^{2,1333}-1)=7000\cdot(1,02146-1)=7000\cdot0,02146" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>150.22 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c22',
        question: 'Calcule el interés bimestral que ganará un depósito de ahorros de 5 000 um, colocado a una TNA de 0,24 capitalizable trimestralmente.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>Capitalización = trimestral (90 días)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=P[(1+i)^n-1]" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">La tasa efectiva trimestral es <img src="https://latex.codecogs.com/svg.image?i_t=\frac{0,24}{4}=0,06" />. La tasa efectiva bimestral equivalente es <img src="https://latex.codecogs.com/svg.image?i_b=(1,06)^{60/90}-1=(1,06)^{0,6667}-1=1,0395-1=0,0395" />. <img src="https://latex.codecogs.com/svg.image?I=5000\cdot0,0395" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>197.50 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c23',
        question: 'Si se requiere ganar un interés de 1 000 um en el plazo de 2 meses, ¿qué principal debe colocarse en un banco que remunera los depósitos con una TEM de 0,015?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>I = 1.000 um</li>
                        <li>i = 0,015 (TEM)</li>
                        <li>n = 2 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{(1+i)^n-1}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm"><img src="https://latex.codecogs.com/svg.image?P=\frac{1000}{(1+0,015)^2-1}=\frac{1000}{1,030225-1}=\frac{1000}{0,030225}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>33,086.52 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c24',
        question: 'Una inversión efectuada en la bolsa de valores produjo un interés de 1 300 um durante 77 días; en ese lapso de tiempo la tasa de interés efectiva acumulada fue 0,054. ¿Cuánto fue el importe original de la inversión?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>I = 1.300 um</li>
                        <li>i = 0,054 (tasa acumulada)</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{i}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm"><img src="https://latex.codecogs.com/svg.image?P=\frac{1300}{0,054}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>24,074.07 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c25',
        question: 'La rentabilidad en 23 días que produjo un paquete accionario adquirido en la bolsa de valores fue 500 um; dicho paquete accionario acumuló en 30 días una tasa efectiva de interés de 0,039. ¿Cuánto fue su precio de adquisición hace 23 días?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>Interés en 23 días = 500 um</li>
                        <li>Tasa efectiva en 30 días = 0,039</li>
                        <li>n = 23 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{(1+i)^n-1}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">La tasa efectiva para 23 días es <img src="https://latex.codecogs.com/svg.image?i_{23d}=(1+0,039)^{\frac{23}{30}}-1=1,0297-1=0,0297" />. <img src="https://latex.codecogs.com/svg.image?P=\frac{500}{0,0297}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>16,835.02 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c26',
        question: '¿Cuánto es el importe del principal por colocar en un banco que ofrece una TEM de 0,01 para ganar un interés compuesto de 500 um en un plazo de 45 días?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>I = 500 um</li>
                        <li>i = 0,01 (TEM)</li>
                        <li>n = 45 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?P=\frac{I}{(1+i)^n-1}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{45}{30}=1,5" /> meses. <img src="https://latex.codecogs.com/svg.image?P=\frac{500}{(1+0,01)^{1,5}-1}=\frac{500}{1,015037-1}=\frac{500}{0,015037}" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: P = <strong>33,250.65 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c27',
        question: '¿Qué TEM debe aplicarse un principal de 5 000 um colocado en un banco para que produzca una ganancia de 800 um durante 4 meses?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>I = 800 um</li>
                        <li>n = 4 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos el monto: <img src="https://latex.codecogs.com/svg.image?S=P+I=5000+800=5800" />. <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{5800}{5000}\right)^{1/4}-1=(1,16)^{0,25}-1=1,0378-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.0378 TEM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c28',
        question: '¿A qué TEA debe colocarse un principal para que se duplique en 42 meses?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 2P</li>
                        <li>n = 42 meses</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{42}{12}=3,5" /> años. <img src="https://latex.codecogs.com/svg.image?i=(2)^{1/3,5}-1=1,2201-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.2201 TEA</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c29',
        question: 'Calcule la TEA a la que se colocó un principal de 5 000 um, que en el lapso de 88 días produjo un interés compuesto de 269.95 um.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>I = 269,95 um</li>
                        <li>n = 88 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos el monto: <img src="https://latex.codecogs.com/svg.image?S=P+I=5000+269,95=5269,95" />. Convertimos el tiempo a años: <img src="https://latex.codecogs.com/svg.image?n=\frac{88}{360}" />. <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{5269,95}{5000}\right)^{1/(88/360)}-1=(1,05399)^{4,0909}-1=1,2351-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.2351 TEA</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c30',
        question: 'El 18 de enero la compañía Mario compró en la bolsa de valores un paquete accionario en 90 000 um, que vendió el 26 de febrero del mismo año y obtuvo una rentabilidad neta de 6 500 um. Calcule la TEM que obtuvo Mario en esa operación.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 90.000 um</li>
                        <li>I = 6.500 um</li>
                        <li>Fechas: 18 de enero a 26 de febrero</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos los días: enero(31-18=13) + febrero(26) = 39 días. Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{39}{30}" />. Calculamos el monto: <img src="https://latex.codecogs.com/svg.image?S=P+I=90000+6500=96500" />. <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{96500}{90000}\right)^{1/(39/30)}-1=(1,0722)^{0,7692}-1=1,0543-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.0543 TEM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c31',
        question: 'Un principal de 10 000 um colocado en una cuenta de ahorros durante 90 días generó un interés compuesto de 612,08 um. Calcule la TEM que se aplicó en esta operación.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 10.000 um</li>
                        <li>I = 612,08 um</li>
                        <li>n = 90 días</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{S}{P}\right)^{1/n}-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos el monto: <img src="https://latex.codecogs.com/svg.image?S=P+I=10000+612,08=10612,08" />. Convertimos el tiempo a meses: <img src="https://latex.codecogs.com/svg.image?n=\frac{90}{30}=3" /> meses. <img src="https://latex.codecogs.com/svg.image?i=\left(\frac{10612,08}{10000}\right)^{1/3}-1=(1,061208)^{0,3333}-1=1,02-1" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: i = <strong>0.02 TEM</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c32',
        question: '¿Cuántos días serán necesarios para que un principal de 10 000 um produzca un interés de 489,21 um colocado a una TNA de 0,12 capitalizable mensualmente?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 10.000 um</li>
                        <li>I = 489,21 um</li>
                        <li>j = 0,12 (TNA)</li>
                        <li>Capitalización = mensual</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(S/P)}{\log(1+i)}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos el monto: <img src="https://latex.codecogs.com/svg.image?S=P+I=10000+489,21=10489,21" />. La tasa efectiva del período es <img src="https://latex.codecogs.com/svg.image?i=\frac{0,12}{12}=0,01" /> (TEM). El resultado será en meses. <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(10489,21/10000)}{\log(1,01)}=\frac{\log(1,048921)}{\log(1,01)}=4,8035" />. Días = <img src="https://latex.codecogs.com/svg.image?4,8035\cdot30=144,1" /> días.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>144 días</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c33',
        question: '¿En cuántos trimestres un principal de 5 000 um ganará un interés de 630,81 um colocado en un banco a una TNA de 0,24 con capitalización mensual?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 5.000 um</li>
                        <li>I = 630,81 um</li>
                        <li>j = 0,24 (TNA)</li>
                        <li>Capitalización = mensual</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(S/P)}{\log(1+i)}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos el monto: <img src="https://latex.codecogs.com/svg.image?S=P+I=5000+630,81=5630,81" />. La tasa efectiva mensual es <img src="https://latex.codecogs.com/svg.image?i_m=\frac{0,24}{12}=0,02" />. El resultado será en meses. <img src="https://latex.codecogs.com/svg.image?n_m=\frac{\log(5630,81/5000)}{\log(1,02)}=6" /> meses. Convertimos a trimestres: <img src="https://latex.codecogs.com/svg.image?n_t=\frac{6}{3}=2" /> trimestres.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>2 trimestres</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c34',
        question: 'Calcule el interés de un principal que devenga una TEA de 0,12 y se convirtió en un monto de 10 000 um en el plazo de medio año.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>S = 10.000 um</li>
                        <li>i = 0,12 (TEA)</li>
                        <li>n = medio año = 0,5 años</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?I=S-P=S-S(1+i)^{-n}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Calculamos el principal: <img src="https://latex.codecogs.com/svg.image?P=10000\cdot(1,12)^{-0,5}=10000\cdot0,944911=9449,11" />. <img src="https://latex.codecogs.com/svg.image?I=10000-9449,11" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: I = <strong>550.89 um</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c35',
        question: '¿Qué tiempo debe transcurrir para que la relación entre un principal de 8 000 um colocado a una TEM de 0,04 y su monto, sea 4/10?',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 8.000 um</li>
                        <li>i = 0,04 (TEM)</li>
                        <li>P/S = 4/10</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(S/P)}{\log(1+i)}" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">La relación P/S=4/10 es equivalente a <img src="https://latex.codecogs.com/svg.image?S/P=10/4=2,5" />. <img src="https://latex.codecogs.com/svg.image?n=\frac{\log(2,5)}{\log(1,04)}=\frac{0,39794}{0,01703}=23,36" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: n = <strong>23.36 meses</strong></p>
                </div>
            </div>
        `
    },
    {
        id: 'c36',
        question: 'Una deuda de 300 000 um devenga una TNQ (quincenal) de 0,005 capitalizable semanalmente. Las fechas de inicio y término de esta operación fueron el 31 de marzo y 18 de junio del mismo año. Calcule el monto de la operación y el valor de la tasa efectiva del período de la operación.',
        solution: `
            <div class="solution-grid">
                <div>
                    <h5 class="font-semibold">Datos</h5>
                    <ul class="list-disc list-inside text-sm">
                        <li>P = 300.000 um</li>
                        <li>j = 0,005 (TNQ)</li>
                        <li>Capitalización = semanal (7 días)</li>
                        <li>Fechas: 31 de marzo a 18 de junio</li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-semibold">Fórmula</h5>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?S=P(1+i)^n" />
                    </div>
                    <div class="formula !my-2">
                        <img src="https://latex.codecogs.com/svg.image?i_e=(1+i)^n-1" />
                    </div>
                </div>
                <div class="col-span-full">
                    <h5 class="font-semibold">Desarrollo</h5>
                    <p class="text-sm">Días: junio(30) + julio(31) + agosto(31) + sept(30) + oct(1) = 93 días. Tasa efectiva del período de capitalización (7 días): <img src="https://latex.codecogs.com/svg.image?i=0,005\cdot\frac{7}{15}=0,002333" />. Número de períodos: <img src="https://latex.codecogs.com/svg.image?n=\frac{79}{7}=11,2857" />. <img src="https://latex.codecogs.com/svg.image?i_e=(1+0,002333)^{11,2857}-1=1,0267-1=0,0267" />. <img src="https://latex.codecogs.com/svg.image?S=300000\cdot(1,0267)=308010" />.</p>
                </div>
                <div class="result-box">
                    <p class="font-bold">Resultado: S = <strong>308,010 um</strong>, Tasa efectiva = <strong>0.0267</strong></p>
                </div>
            </div>
        `
    },
    // ... más problemas de interés compuesto
];

const pdfProblems = [];
