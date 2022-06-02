//
// Copyright © 2022 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { IntlString } from '@anticrm/platform'
import { mergeIds } from '@anticrm/platform'
import tracker, { trackerId } from '../../tracker/lib'
import { AnyComponent } from '@anticrm/ui'

export default mergeIds(trackerId, tracker, {
  string: {
    More: '' as IntlString,
    Delete: '' as IntlString,
    Open: '' as IntlString,
    Members: '' as IntlString,
    Inbox: '' as IntlString,
    MyIssues: '' as IntlString,
    Issues: '' as IntlString,
    Views: '' as IntlString,
    Active: '' as IntlString,
    AllIssues: '' as IntlString,
    ActiveIssues: '' as IntlString,
    BacklogIssues: '' as IntlString,
    Backlog: '' as IntlString,
    Board: '' as IntlString,
    Project: '' as IntlString,
    Projects: '' as IntlString,
    AllProjects: '' as IntlString,
    BacklogProjects: '' as IntlString,
    ActiveProjects: '' as IntlString,
    ClosedProjects: '' as IntlString,
    NewProject: '' as IntlString,
    CreateProject: '' as IntlString,
    ProjectNamePlaceholder: '' as IntlString,
    ProjectDescriptionPlaceholder: '' as IntlString,
    ProjectStatusPlaceholder: '' as IntlString,
    ProjectLead: '' as IntlString,
    ProjectMembers: '' as IntlString,
    StartDate: '' as IntlString,
    TargetDate: '' as IntlString,
    Planned: '' as IntlString,
    InProgress: '' as IntlString,
    Paused: '' as IntlString,
    Completed: '' as IntlString,
    Canceled: '' as IntlString,
    CreateTeam: '' as IntlString,
    AddIssue: '' as IntlString,
    NewIssue: '' as IntlString,
    Team: '' as IntlString,
    SelectIssue: '' as IntlString,
    SelectTeam: '' as IntlString,
    SaveIssue: '' as IntlString,
    Todo: '' as IntlString,
    Done: '' as IntlString,
    SetPriority: '' as IntlString,
    SetStatus: '' as IntlString,
    Priority: '' as IntlString,
    NoPriority: '' as IntlString,
    Urgent: '' as IntlString,
    High: '' as IntlString,
    Medium: '' as IntlString,
    Low: '' as IntlString,
    Title: '' as IntlString,
    Identifier: '' as IntlString,
    Description: '' as IntlString,
    Status: '' as IntlString,
    DefaultIssueStatus: '' as IntlString,
    IssueStatuses: '' as IntlString,
    StatusCategory: '' as IntlString,
    CategoryBacklog: '' as IntlString,
    CategoryUnstarted: '' as IntlString,
    CategoryStarted: '' as IntlString,
    CategoryCompleted: '' as IntlString,
    CategoryCanceled: '' as IntlString,
    Number: '' as IntlString,
    Assignee: '' as IntlString,
    AssignTo: '' as IntlString,
    AssignedTo: '' as IntlString,
    SubIssues: '' as IntlString,
    SetParent: '' as IntlString,
    ChangeParent: '' as IntlString,
    RemoveParent: '' as IntlString,
    OpenParent: '' as IntlString,
    OpenSubIssues: '' as IntlString,
    AddSubIssues: '' as IntlString,
    BlockedBy: '' as IntlString,
    RelatedTo: '' as IntlString,
    Comments: '' as IntlString,
    Attachments: '' as IntlString,
    Labels: '' as IntlString,
    Space: '' as IntlString,
    SetDueDate: '' as IntlString,
    ChangeDueDate: '' as IntlString,
    ModificationDate: '' as IntlString,
    Issue: '' as IntlString,
    Document: '' as IntlString,
    DocumentIcon: '' as IntlString,
    DocumentColor: '' as IntlString,
    Rank: '' as IntlString,
    DueDatePopupTitle: '' as IntlString,
    DueDatePopupOverdueTitle: '' as IntlString,
    DueDatePopupDescription: '' as IntlString,
    DueDatePopupOverdueDescription: '' as IntlString,
    Grouping: '' as IntlString,
    Ordering: '' as IntlString,
    CompletedIssues: '' as IntlString,
    ShowEmptyGroups: '' as IntlString,
    NoGrouping: '' as IntlString,
    NoAssignee: '' as IntlString,
    LastUpdated: '' as IntlString,
    DueDate: '' as IntlString,
    All: '' as IntlString,
    PastWeek: '' as IntlString,
    PastMonth: '' as IntlString,
    Filter: '' as IntlString,
    ClearFilters: '' as IntlString,
    Back: '' as IntlString,
    AssetLabel: '' as IntlString,
    AddToProject: '' as IntlString,
    MoveToProject: '' as IntlString,
    NoProject: '' as IntlString,
    ProjectLeadTitle: '' as IntlString,
    ProjectMembersTitle: '' as IntlString,
    ProjectLeadSearchPlaceholder: '' as IntlString,
    ProjectMembersSearchPlaceholder: '' as IntlString,

    IssueTitlePlaceholder: '' as IntlString,
    IssueDescriptionPlaceholder: '' as IntlString,
    Unassigned: '' as IntlString,
    AddIssueTooltip: '' as IntlString,

    CopyIssueUrl: '' as IntlString,
    CopyIssueId: '' as IntlString,
    CopyIssueBranch: '' as IntlString,

    FilterIs: '' as IntlString,
    FilterIsNot: '' as IntlString,
    FilterIsEither: '' as IntlString,
    FilterStatesCount: '' as IntlString,

    EditIssue: '' as IntlString,

    Save: '' as IntlString,
    IncludeItemsThatMatch: '' as IntlString,
    AnyFilter: '' as IntlString,
    AllFilters: '' as IntlString
  },
  component: {
    NopeComponent: '' as AnyComponent,
    Inbox: '' as AnyComponent,
    MyIssues: '' as AnyComponent,
    Issues: '' as AnyComponent,
    Views: '' as AnyComponent,
    Active: '' as AnyComponent,
    Backlog: '' as AnyComponent,
    Board: '' as AnyComponent,
    Projects: '' as AnyComponent,
    IssuePresenter: '' as AnyComponent,
    ProjectTitlePresenter: '' as AnyComponent,
    ProjectPresenter: '' as AnyComponent,
    TitlePresenter: '' as AnyComponent,
    ModificationDatePresenter: '' as AnyComponent,
    PriorityPresenter: '' as AnyComponent,
    PriorityEditor: '' as AnyComponent,
    ProjectEditor: '' as AnyComponent,
    StatusPresenter: '' as AnyComponent,
    StatusEditor: '' as AnyComponent,
    AssigneePresenter: '' as AnyComponent,
    DueDatePresenter: '' as AnyComponent,
    EditIssue: '' as AnyComponent,
    CreateTeam: '' as AnyComponent,
    NewIssueHeader: '' as AnyComponent,
    IconPresenter: '' as AnyComponent,
    LeadPresenter: '' as AnyComponent,
    TargetDatePresenter: '' as AnyComponent,
    ProjectMembersPresenter: '' as AnyComponent,
    ProjectStatusPresenter: '' as AnyComponent,
    SetDueDateActionPopup: '' as AnyComponent,
    SetParentIssueActionPopup: '' as AnyComponent
  }
})
