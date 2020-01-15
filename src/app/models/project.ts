import {Task} from './task';

export class Project {
    public id: number;
	public title: string = null;
    public publisher: string;
    public publicationDate: string;
    public projectStarDate: string;
    public projectEndDate: string;
	public active: boolean;
    public description: string;
    public taskList: Task[];
}
