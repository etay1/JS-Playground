function drawTriangle(triangleSize) {
    if (typeof triangleSize !== 'number') {
        console.log("Please enter a valid number");
        return;
    }
    
    if (triangleSize <= 0) {
        console.log("Please enter a positive non-zero number");
        return;
    }

    let triangle = "";
    let line = "";
        for (let i = 0; i < triangleSize; i++) {
            line += "*";
            triangle += line;
            
            if (i !== triangleSize - 1) {
                triangle += "\n";
            }
        }
        console.log(triangle)
    }
    