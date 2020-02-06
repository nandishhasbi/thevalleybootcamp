#subplotting for later
import matplotlib.pyplot as plt

for i in range(5):
  data_pt = next(iter(dataset))
  image = plt.imshow(data_pt[0])
  label = [x for (x,y) in label_mapping.items() if y==data_pt[1]]
  print(label)