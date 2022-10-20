# RSL Raider - A Raid Collection Viewer

> :warning: While this is a web app, the technologies it is dependent on
> ([Raid-Extractor](https://github.com/raid-toolkit/extractor/releases) and [Raid-Toolkit-SDK](https://github.com/raid-toolkit/raid-toolkit-sdk#installation))
> run on Windows only. As such, live updates only work if you're using Windows.
> Once the `JSON` importer is implemented you will be able to upload the `JSON` straight
> to _RSL Raider_.

## Features

|       Implemented       | RSL Raider<br>Version | Feature                        | Description                                                                                                                                                                                                                       |
|:-----------------------:|:---------------------:|:-------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| :ballot_box_with_check: |        0.1.0 +        | Basic Account Info             | - :ballot_box_with_check: Account Name<br> - :ballot_box_with_check: Shard Types and Count for Each Type<br> - :ballot_box_with_check: Count of All Champs<br>                                                                    |
| :ballot_box_with_check: |        0.1.0 +        | Great Hall                     | A table displaying the user's progress in the great hall. Shows the stat levels upgraded for each affinity.                                                                                                                       |
| :ballot_box_with_check: |        0.1.0 +        | Manual Refresh Button          | Allows the user to refresh the account dump.                                                                                                                                                                                      |
|  :white_square_button:  |                       | Global Stat Boost Table        | A table showing all stat boosts for all factions, their rarities, and their affinities from Great Hall, Faction Guardians, the user's Clan Level, and the user's area level. (Am I missing anything?)                             |
|  :white_square_button:  |                       | Account Champ List             | Display all champs under the current account.                                                                                                                                                                                     |
|  :white_square_button:  |                       | Filter and Sort Champs         | - :white_square_button: Name<br> - :white_square_button: Faction<br> - :white_square_button: Affinity<br> - :white_square_button: Champ Type<br> - :white_square_button: Equipped Artifacts<br> - :white_square_button: User Tags |
|  :white_square_button:  |                       | Images and Thumbnails          | - :white_square_button: Shards<br> - :white_square_button: Affinities<br> - :white_square_button: Arena Badges<br> - :white_square_button: Avatars<br> - :white_square_button: Prize images<br> - :white_square_button: Resources |
|  :white_square_button:  |                       | Current Tournaments and Events | A table showing ongoing tournaments and events, time to start, time to end, available prizes, current points                                                                                                                      |
|  :white_square_button:  |                       | User Dashboard                 | Allow the user to drag and drop certain components into a window for quick data.                                                                                                                                                  |
|  :white_square_button:  |                       | Upload Extractor JSON          | Allows the user to upload JSON downloaded from the Extractor. Reload Button will actually re-check the JSON file.                                                                                                                 |

:star2: :star2:**More to come!**:star2: :star2: :monocle_face: So be sure to star or follow this repo for updates.

### Feature Requests
Don't see something you like, or have other suggestions? Feel free to open an issue with the title containing "Feature Request," or contribute to development by cloning/forking and making some PRs!

## Contributing
Please see the [Developer's Guide](https://github.com/sundayj/RSL-Raider/blob/main/DEVELOPERS.md).
