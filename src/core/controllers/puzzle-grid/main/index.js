import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle-grid-settings';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle-grid-settings';
import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { TILES_PER_COLUMN } from '@shared-constants/puzzle-grid-settings';

import { TILE_MOVE_UP } from '@shared-constants/movement-direction';
import { TILE_MOVE_DOWN } from '@shared-constants/movement-direction';
import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';
import { TILE_MOVE_RIGHT } from '@shared-constants/movement-direction';


const PuzzleGridController = {
    generateSolvedPuzzleState: (maxTiles) => Array.from({ length: maxTiles + 1 }, (_, index) => index),

    generateShuffleSimplePuzzleState: (permutation) => {
        const shuffled = [...permutation];

        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];


        return shuffled;
    },

    generateShufflePuzzleState: (permutation) => {
        const shuffled = [...permutation];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }


        return shuffled;
    },

    isSolved: (solution) => solution.every((num, index) => num === index),

    updateState: ({ solution, selectedIndex, zeroIndex }) => {
        const stateCopy = [...solution];

        [stateCopy[zeroIndex], stateCopy[selectedIndex]] = [stateCopy[selectedIndex], stateCopy[zeroIndex]];


        return stateCopy;
    },

    calculateIndexPositionInGrid: ({ emptyTileIndex, tilesPerRow, tilesPerColumn }) => {
        const position = {
            row: Math.floor(emptyTileIndex / tilesPerRow),
            column: emptyTileIndex % tilesPerColumn
        };


        return position;
    },

    getEmptyTilePositionInGrid: (items, emptyTileValue) => items.findIndex(value => value === emptyTileValue),

    getAdjacentIndicesInGrid: ({
        positionInGrid,
        firstTileIndex,
        tilesPerRow,
        tileMoveUp,
        tileMoveDown,
        tileMoveLeft,
        tileMoveRight,
        movementDistance
    }) => {
        const { index, row, column } = positionInGrid;
        const adjacentIndices = [];
        const pushIndex = (index, movementDirection) => adjacentIndices.push({
            index,
            movementDirection
        });

        if (row > firstTileIndex) {
            pushIndex(index - tilesPerRow, tileMoveDown);
        }

        if (row < tilesPerRow - movementDistance) {
            pushIndex(index + tilesPerRow, tileMoveUp);
        }

        if (column > firstTileIndex) {
            pushIndex(index - movementDistance, tileMoveRight);
        }

        if (column < tilesPerRow - movementDistance) {
            pushIndex(index + movementDistance, tileMoveLeft);
        }

        return adjacentIndices;
    },

    getMovableTileIndices({ solution, permutation }) {
        const mappedPermutation = solution.map(value => permutation[value]);

        const emptyTileIndex = this.getEmptyTilePositionInGrid(mappedPermutation, EMPTY_TILE_VALUE);
        const positionInGrid = this.calculateIndexPositionInGrid({
            emptyTileIndex,
            tilesPerRow: TILES_PER_ROW,
            tilesPerColumn: TILES_PER_COLUMN
        });

        const movableTileIndices = this.getAdjacentIndicesInGrid({
            positionInGrid: {
                ...positionInGrid,
                index: emptyTileIndex
            },
            firstTileIndex: FIRST_TILE_INDEX,
            tilesPerRow: TILES_PER_ROW,
            tileMoveUp: TILE_MOVE_UP,
            tileMoveDown: TILE_MOVE_DOWN,
            tileMoveLeft: TILE_MOVE_LEFT,
            tileMoveRight: TILE_MOVE_RIGHT,
            movementDistance: MOVEMENT_DISTANCE
        });


        return movableTileIndices;
    },

    async loadPuzzle({ id }) {
        try {
            const { [id]: puzzle } = await import('@shared-constants/puzzle-collection');

            if (!puzzle) {
                throw new Error(`Puzzle with id ${id} not found`);
            }

            return { puzzle };
        } catch (error) {
            console.error('Error loading puzzle: ', error);
        }
    }
};

export { PuzzleGridController };
