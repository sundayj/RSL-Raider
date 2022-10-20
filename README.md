# RSL Raider - A Raid Collection Viewer

> :warning: While this is a web app, the technologies it is dependent on
> ([Raid-Extractor](https://github.com/raid-toolkit/extractor/releases) and [Raid-Toolkit-SDK](https://github.com/raid-toolkit/raid-toolkit-sdk#installation))
> run on Windows only. As such, live updates only work if you're using Windows.
> Once the `JSON` importer is implemented you will be able to upload the `JSON` straight
> to _RSL Raider_.

## Features

|      Implemented      | RSL Raider<br>Version | Feature               | Description                                                                                                                                                        |
|:---------------------:|:---------------------:|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  :white_check_mark:   |        0.1.0 +        | Basic Account Info    | - Account Name<br> - Shard Types and Count for Each Type<br> - Count of All Champs<br> - Great Hall Table Showing Current Levels for Each Stat Under Each Affinity |
|  :white_check_mark:   |        0.1.0 +        | Manual Refresh Button | Allows the user to refresh the account dump.                                                                                                                       |
| :white_square_button: |                       | Upload Extractor JSON | Allows the user to upload JSON downloaded from the Extractor. Reload Button will actually re-check the JSON file.                                                  |
| :white_square_button: |                       | Account Champ List    | Display all champs under the current account.                                                                                                                      |
