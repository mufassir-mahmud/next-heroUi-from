'use client'

import { createATask } from "@/lib/actions";
// import { Calendar } from "@gravity-ui/icons";
import { Button, Calendar, DateField, DatePicker, Label, ListBox, Modal, Select, TextField,Input } from "@heroui/react";
import { Suspense } from "react";
// import { Suspense } from "react";


const NewTask = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-6">Add New Task</h2>
            <div className=" flex justify-center">
                <form action={createATask} className="flex flex-col gap-4 w-4/12">
                                  <TextField className="w-full" name="title" type="text" variant="secondary">
                                    <Label>Title</Label>
                                    <Input placeholder="Enter Task Titke" />
                                  </TextField>
                                  <TextField className="w-full" name="description" type="text" variant="secondary">
                                    <Label>Description</Label>
                                    <Input placeholder="Enter Task Description" />
                                  </TextField>
                                   <Select className="" placeholder="Select one" name="priority">
                      <Label>Priority</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="low" textValue="Low">
                            Low
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="medium" textValue="Medium">
                            Medium
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="high" textValue="High">
                            High
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          
                        </ListBox>
                      </Select.Popover>
                    </Select>
                                   <Select className="" placeholder="Select one" name="category">
                      <Label>Category</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="learning" textValue="Learning">
                            Learning
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="project" textValue="Project">
                            Project
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="career" textValue="Career">
                            Career
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          
                        </ListBox>
                      </Select.Popover>
                    </Select>
                                   <Select className="" placeholder="Select One" name="status">
                      <Label>Status</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="pending" textValue="Pending">
                            Pending
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="in-progress" textValue="In-progress">
                            In-progress
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="complete" textValue="Complete">
                            Complete
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    <Suspense fallback={<div>Loading date picker...</div>}>
                      <DatePicker className="" name="dueDate">
                      <Label>Date</Label>
                      <DateField.Group fullWidth>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        <DateField.Suffix>
                          <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                          </DatePicker.Trigger>
                        </DateField.Suffix>
                      </DateField.Group>
                      <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                          <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                              <Calendar.YearPickerTriggerHeading />
                              <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                          </Calendar.Header>
                          <Calendar.Grid>
                            <Calendar.GridHeader>
                              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                          </Calendar.Grid>
                          <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                              {({year}) => <Calendar.YearPickerCell year={year} />}
                            </Calendar.YearPickerGridBody>
                          </Calendar.YearPickerGrid>
                        </Calendar>
                      </DatePicker.Popover>
                    </DatePicker>
                 </Suspense>
                                   
                                  <Modal.Footer>
                              <Button slot="close" variant="secondary">
                                Cancel
                              </Button>
                              <Button slot="close" type="submit">Send Message</Button>
                            </Modal.Footer>
                                </form>
            </div>
        </div>
    );
};

export default NewTask;