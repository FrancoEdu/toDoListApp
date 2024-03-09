export type TaskModel = {
    id: string;
    checked: boolean;
    data: string;
    onRemove: () => void;
    onChecked: () => void;
}

export interface ITask{
    id: string,
    checked: boolean,
    data: string,
}