'use client'

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function CoursesPage() {
	return (
		<div className="">
			<Table aria-label="Example static collection table">
				<TableHeader>
					<TableColumn><b>Tageszeit</b></TableColumn>
					<TableColumn><b>Montag</b></TableColumn>
					<TableColumn><b>Dienstag</b></TableColumn>
					<TableColumn><b>Mittwoch</b></TableColumn>
					<TableColumn><b>Donnerstag</b></TableColumn>
					<TableColumn><b>Freitag</b></TableColumn>
				</TableHeader>
				<TableBody>
					<TableRow key="1">
						<TableCell><b>Vormittags</b></TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
					</TableRow>
					<TableRow key="2">
						<TableCell><b>Nachmittags</b></TableCell>
						<TableCell>-</TableCell>
						<TableCell>Dienstag <b>17:30</b> Hatha Yoga	</TableCell>
						<TableCell>Mittwoch <b>17:30</b> Rückenyoga	</TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
					</TableRow>
					<TableRow key="3">
						<TableCell><b>Abends</b></TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
						<TableCell>-</TableCell>
						<TableCell>Donnerstag <b>18:00</b> sanftes Yoga	</TableCell>
						<TableCell>Freitag <b>17:00</b> Hatha Yoga
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>

	);
}
