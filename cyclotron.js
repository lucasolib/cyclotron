function cyclotron(particle, matrix) {
  const cyclotronMatrix = [];
  const electron = 'e';
  const proton = 'p';
  const neutron = 'n';

  for (let i = 0; i < matrix; i += 1) {
    cyclotronMatrix.push(new Array(matrix).fill(1));
  }

  switch (particle) {
    case neutron:
      neutronCycle(neutron, cyclotronMatrix);
      break;

    case electron:
      electronCycle(matrix, electron, cyclotronMatrix);
      break;

    case proton:
      protonCycle(matrix, proton, cyclotronMatrix);
      break;

    default:
      throw new Error('Particle not available')
  }
  
  for (let i = 0; i < matrix; i += 1) {
    console.log(cyclotronMatrix[i].join(' '));
  }
}

function neutronCycle (particle, cyclotronMatrix) {
  cyclotronMatrix[0].fill(particle);
};

function electronCycle (matrix, particle, cyclotronMatrix) {
  cyclotronMatrix[0].fill(particle);
  for (let i = 0; i < matrix; i += 1) {
    cyclotronMatrix[i][matrix - 1] = particle;
  }
};

function protonCycle (matrix, particle, cyclotronMatrix) {
  cyclotronMatrix[0].fill(particle);
  cyclotronMatrix[matrix - 1].fill(particle);

  for (let i = 0; i < matrix; i += 1) {
    cyclotronMatrix[i][0] = particle;
    cyclotronMatrix[i][matrix - 1] = particle;
  }

  cyclotronMatrix[matrix - 1][matrix - 1] = 1;
  cyclotronMatrix[matrix -2][matrix - 2] = particle;
};

// Example usage:
cyclotron('n', 4)
cyclotron('e', 7)
cyclotron('p', 5)
cyclotron('a', 6)