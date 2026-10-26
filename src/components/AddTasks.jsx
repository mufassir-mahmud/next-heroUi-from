"use client";
import {CirclePlus} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField,ListBox, Select,Calendar, DateField, DatePicker} from "@heroui/react";
// import { type } from './../../.next/types/routes.d';

const AddTasks = ({createATask}) => {
    return (
         <Modal>
      <Button variant="secondary">Open Contact Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we will get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
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
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" type="submit">Send Message</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default AddTasks;