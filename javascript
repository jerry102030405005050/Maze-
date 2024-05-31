   document.addEventListener('keydown', (event) => {
            const key = event.code;

            const player = document.getElementById('player');
            const maze = document.getElementById('maze');
            const cells = maze.querySelectorAll('.cell');
            const index = Array.prototype.indexOf.call(cells, player);
            const columns = 10;

            let newIndex;

            switch (key) {
                case 'ArrowUp':
                    newIndex = index - columns;
                    break;
                case 'ArrowDown':
                    newIndex = index + columns;
                    break;
                case 'ArrowLeft':
                    newIndex = index - 1;
                    break;
                case 'ArrowRight':
                    newIndex = index + 1;
                    break;
                default:
                    return;
            }

            if (newIndex >= 0 && newIndex < cells.length && !cells[newIndex].classList.contains('wall')) {
                player.classList.remove('player');
                cells[newIndex].classList.add('player');
                player.id = '';
                cells[newIndex].id = 'player';

                if (cells[newIndex].classList.contains('end')) {
                    document.getElementById('congratulations').style.display = 'block';
                }
            }
        });
