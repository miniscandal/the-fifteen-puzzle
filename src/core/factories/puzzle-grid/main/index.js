import { loadPuzzle } from '@feat-puzzle-scene/load-puzzle';

import { TILES_PER_ROW } from '@shared-constants/puzzle-grid-settings';
import { MOVEMENT_DISTANCE } from '@shared-constants/puzzle-grid-settings';
import { FIRST_TILE_INDEX } from '@shared-constants/puzzle-grid-settings';
import { EMPTY_TILE_VALUE } from '@shared-constants/puzzle-grid-settings';
import { MAX_TILES } from '@shared-constants/puzzle-grid-settings';

import { TILE_MOVE_UP } from '@shared-constants/movement-direction';
import { TILE_MOVE_DOWN } from '@shared-constants/movement-direction';
import { TILE_MOVE_RIGHT } from '@shared-constants/movement-direction';
import { TILE_MOVE_LEFT } from '@shared-constants/movement-direction';



async function PuzzleGridFactory({ PuzzleGridController, puzzleId = '' }) {
    let solved = false;
    let movableTileIndices = [];

    const solution = PuzzleGridController.generateSolvedPuzzleState(MAX_TILES);
    let state = PuzzleGridController.generateShufflePuzzleState(solution);

    const { puzzle } = await loadPuzzle({ id: puzzleId });

    const permutation = puzzle.permutation;

    const checkState = (state = []) => {
        solved = state.every((num, index) => num === index);

        return solved;
    };

    const updateState = (index, zeroIndex) => {
        const stateCopy = [...state];

        [stateCopy[zeroIndex], stateCopy[index]] = [stateCopy[index], stateCopy[zeroIndex]];

        state = stateCopy;

        solved = checkState(stateCopy);

        return state;
    };

    const calculateIndexPositionInGrid = (index) => {
        const indexPosition = {
            row: Math.floor(index / TILES_PER_ROW),
            column: index % TILES_PER_ROW
        };

        return indexPosition;
    };

    const getItemPositionInGrid = (items) => {
        const index = items.findIndex(value => value === EMPTY_TILE_VALUE);

        const indexPosition = {
            index,
            ...calculateIndexPositionInGrid(index)
        };

        return indexPosition;
    };


    const getAdjacentIndicesInGrid = ({ index, row, column }) => {
        const adjacentIndices = [];
        const pushIndex = (index, movementDirection) => adjacentIndices.push({
            index,
            movementDirection
        });

        if (row > FIRST_TILE_INDEX) {
            pushIndex(index - TILES_PER_ROW, TILE_MOVE_DOWN);
        }

        if (row < TILES_PER_ROW - MOVEMENT_DISTANCE) {
            pushIndex(index + TILES_PER_ROW, TILE_MOVE_UP);
        }

        if (column > FIRST_TILE_INDEX) {
            pushIndex(index - MOVEMENT_DISTANCE, TILE_MOVE_RIGHT);
        }

        if (column < TILES_PER_ROW - MOVEMENT_DISTANCE) {
            pushIndex(index + MOVEMENT_DISTANCE, TILE_MOVE_LEFT);
        }

        return adjacentIndices;
    };


    const getMovableTileIndices = () => {
        const mappedPermutation = state.map(value => permutation[value]);

        const currentPosition = getItemPositionInGrid(mappedPermutation);

        const movableTileIndices = getAdjacentIndicesInGrid(currentPosition);

        return movableTileIndices;
    };

    const properties = () => {

        return {
            id: puzzleId,
            permutation,
            state,
            solved,
            movableTileIndices: getMovableTileIndices()
        };
    };


    return {
        get id() { return puzzleId; },
        get permutation() { return permutation; },
        get state() { return state; },
        get solved() { return solved; },
        get movableTileIndices() { return movableTileIndices; },
        properties,
        checkState,
        updateState,
        getMovableTileIndices
    };
}

export { PuzzleGridFactory };
