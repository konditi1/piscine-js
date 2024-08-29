function RNA(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                rna += 'U';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'G':
                rna += 'C';
                break;
            default:
                throw new Error('Invalid nucleotide');
        }
    }
    return rna;
}


function DNA(rna) {
    let dna = '';
    for (let i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                dna += 'T';
                break;
            case 'U':
                dna += 'A';
                break;
            case 'C':
                dna += 'G';
                break;
            case 'G':
                dna += 'C';
                break;
            default:
                throw new Error('Invalid nucleotide');
        }
    }
    return dna;
}
